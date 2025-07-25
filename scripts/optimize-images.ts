import * as fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

let heicConvert: any | null = null;
async function ensureHeicConvert() {
  if (heicConvert) return heicConvert;
  try {
    // dynamic import to avoid extra startup cost when no HEIC present
    heicConvert = (await import('heic-convert')).default;
    return heicConvert;
  } catch {
    return null;
  }
}

/**
 * Simple build-time optimiser for public/assets/photos.
 * – Generates responsive WebP sizes (320-1920px widths)
 * – Writes them to public/generated/images/<eventSlug>/
 * – Emits public/generated/metadata.json consumed at runtime.
 */

const SOURCE_DIR = path.join(process.cwd(), 'public', 'assets', 'photos');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'generated', 'images');
const METADATA_FILE = path.join(process.cwd(), 'public', 'generated', 'metadata.json');

const SIZES = [320, 640, 960, 1280, 1920];
const EXT_REGEX = /\.(jpe?g|png|webp|avif|heic|heif)$/i;

type PhotoMeta = {
  src: string;
  width: number;
  height: number;
  caption: string;
  widths: number[]; // responsive variant widths
};

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

function isImageFile(name: string) {
  return EXT_REGEX.test(name);
}

async function optimiseImage(inputPath: string, outputDir: string, baseName: string, origMeta: sharp.Metadata, ext: string): Promise<PhotoMeta | null> {
  const caption = path.basename(path.dirname(inputPath)); // default caption = event slug (override later)

  // Determine applicable target widths (never upscale)
  const targetWidths = SIZES.filter((w) => (origMeta.width ?? 0) >= w);
  if (targetWidths.length === 0 && origMeta.width) targetWidths.push(origMeta.width); // at least original size

  // Generate resized variants in parallel
  await Promise.all(
    targetWidths.map(async (w) => {
      const outPath = path.join(outputDir, `${baseName}-${w}.webp`);
      try {
        // Skip if already exists (cheap stat check)
        await fs.access(outPath);
        return;
      } catch {
        // Need to create
      }
      let pipeline: sharp.Sharp;
      if (ext === '.heic' || ext === '.heif') {
        const convert = await ensureHeicConvert();
        if (!convert) {
          console.warn(`Skipping HEIC file (conversion lib missing): ${inputPath}`);
          return;
        }
        const inputBuffer = await fs.readFile(inputPath);
        const jpgBuffer = await convert({ buffer: inputBuffer, format: 'JPEG', quality: 1 });
        pipeline = sharp(jpgBuffer);
      } else {
        pipeline = sharp(inputPath);
      }

      await pipeline
        .resize({ width: w })
        .webp({ quality: 75 })
        .toFile(outPath);
    })
  );

  // Largest variant path (last element)
  const largestWidth = targetWidths[targetWidths.length - 1];
  const largestHeight = Math.round(((origMeta.height ?? 0) * largestWidth) / (origMeta.width ?? 1));
  const src = `/generated/images/${path.basename(path.dirname(inputPath))}/${baseName}-${largestWidth}.webp`;

  if (!targetWidths.length) return null;

  return {
    src,
    width: largestWidth,
    height: largestHeight,
    caption,
    widths: targetWidths,
  };
}

async function loadEventCaption(eventDir: string, fallback: string) {
  const metaPath = path.join(eventDir, 'metadata.json');
  try {
    const raw = await fs.readFile(metaPath, 'utf-8');
    const parsed = JSON.parse(raw);
    if (typeof parsed.caption === 'string') return parsed.caption;
  } catch {
    // ignore
  }
  return fallback;
}

async function main() {
  if (!(await fs.stat(SOURCE_DIR).catch(() => undefined))) {
    console.log('No photos directory found – skipping optimisation.');
    return;
  }

  const events = await fs.readdir(SOURCE_DIR);
  let photos: PhotoMeta[] = [];

  for (const slug of events) {
    const eventDir = path.join(SOURCE_DIR, slug);
    const stat = await fs.stat(eventDir);
    if (!stat.isDirectory()) continue;

    const caption = await loadEventCaption(eventDir, slug);

    const files = (await fs.readdir(eventDir)).filter(isImageFile).sort();

    await ensureDir(path.join(OUTPUT_DIR, slug));

    for (const file of files) {
      const inputPath = path.join(eventDir, file);
      const baseName = path.parse(file).name;
      const ext = path.extname(file).toLowerCase();
      let meta: sharp.Metadata;
      if (ext === '.heic' || ext === '.heif') {
        const convert = await ensureHeicConvert();
        if (!convert) {
          console.warn(`Skipping HEIC file (conversion lib missing): ${inputPath}`);
          continue;
        }
        const jpgBuffer = await convert({ buffer: await fs.readFile(inputPath), format: 'JPEG', quality: 1 });
        meta = await sharp(jpgBuffer).metadata();
      } else {
        meta = await sharp(inputPath).metadata();
      }

      const photoMeta = await optimiseImage(inputPath, path.join(OUTPUT_DIR, slug), baseName, meta, ext);
      if (photoMeta) {
        photoMeta.caption = caption; // attach event caption
        photos.push(photoMeta);
      }
    }
  }

  // newest first (by src path which contains slug date)
  photos.sort((a, b) => (a.src > b.src ? -1 : 1));

  // Check for existing metadata.json and preserve any manual edits
  let existingMetadata: PhotoMeta[] = [];
  try {
    const existingData = await fs.readFile(METADATA_FILE, 'utf-8');
    existingMetadata = JSON.parse(existingData);
    
    // Remove any entries that would be overwritten by the new process
    const newSrcPaths = new Set(photos.map(p => p.src));
    existingMetadata = existingMetadata.filter(item => !newSrcPaths.has(item.src));
    
    // Combine existing (manually preserved) entries with new ones
    photos = [...existingMetadata, ...photos];
    
    // Re-sort the combined list
    photos.sort((a, b) => (a.src > b.src ? -1 : 1));
  } catch (error) {
    // No existing file or invalid JSON, just use the newly generated metadata
  }

  await ensureDir(path.dirname(METADATA_FILE));
  await fs.writeFile(METADATA_FILE, JSON.stringify(photos, null, 2));
  console.log(`Optimised images complete. ${photos.length} photos processed.`);
}

main().catch((err) => {
  console.error('Image optimisation failed:', err);
  process.exit(1);
}); 