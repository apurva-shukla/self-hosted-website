import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import { PhotoEvent, Photo } from '@/lib/types';

const PHOTOS_DIR = path.join(process.cwd(), 'public', 'assets', 'photos');

function isImageFile(fileName: string) {
  return /\.(jpe?g|png|webp|avif)$/i.test(fileName);
}

export function getPhotoEvents(): PhotoEvent[] {
  if (!fs.existsSync(PHOTOS_DIR)) return [];

  const eventSlugs = fs
    .readdirSync(PHOTOS_DIR)
    .filter((name) =>
      fs.statSync(path.join(PHOTOS_DIR, name)).isDirectory()
    );

  return eventSlugs
    .map<PhotoEvent>((slug) => {
      const eventDir = path.join(PHOTOS_DIR, slug);

      // Caption (fallback to slug)
      let caption: string = slug;
      const metadataPath = path.join(eventDir, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const raw = fs.readFileSync(metadataPath, 'utf-8');
          const parsed = JSON.parse(raw);
          if (typeof parsed.caption === 'string') {
            caption = parsed.caption;
          }
        } catch {
          // Ignore malformed json and keep slug as caption
        }
      }

      // Images
      const images = fs
        .readdirSync(eventDir)
        .filter(isImageFile)
        .sort()
        .map((file) => `/assets/photos/${slug}/${file}`);

      return { slug, caption, images };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug)); // Sort alphabetically (oldest first)
}

export function getAllPhotos(): Photo[] {
  if (!fs.existsSync(PHOTOS_DIR)) return [];

  const eventSlugs = fs
    .readdirSync(PHOTOS_DIR)
    .filter((name) =>
      fs.statSync(path.join(PHOTOS_DIR, name)).isDirectory()
    );

  const photos: Photo[] = [];

  for (const slug of eventSlugs) {
    const eventDir = path.join(PHOTOS_DIR, slug);

    // caption from metadata
    let caption = slug;
    const metadataPath = path.join(eventDir, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      try {
        const raw = fs.readFileSync(metadataPath, 'utf-8');
        const parsed = JSON.parse(raw);
        if (typeof parsed.caption === 'string') caption = parsed.caption;
      } catch {}
    }

    // images
    const imageFiles = fs
      .readdirSync(eventDir)
      .filter((file) => isImageFile(file))
      .sort();

    for (const file of imageFiles) {
      const filePath = path.join(eventDir, file);
      try {
        const buffer = fs.readFileSync(filePath);
        const dimensions = sizeOf(buffer);
        if (dimensions.width && dimensions.height) {
          photos.push({
            src: `/assets/photos/${slug}/${file}`,
            width: dimensions.width,
            height: dimensions.height,
            caption,
          });
        }
      } catch {}
    }
  }

  // Sort newest first assuming slug has date prefix like YY-MM-DD.
  photos.sort((a, b) => (a.src > b.src ? -1 : 1));

  return photos;
} 