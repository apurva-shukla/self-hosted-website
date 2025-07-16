import Image from 'next/image';
import { Photo } from '@/lib/types';

interface Props {
  photo: Photo;
}

export default function PhotoCard({ photo }: Props) {
  // Build srcSet from available widths (if provided)
  const srcSet = photo.widths
    ? photo.widths
        .map((w) => {
          const base = photo.src.replace(/-\d+\.webp$/, '');
          return `${base}-${w}.webp ${w}w`;
        })
        .join(', ')
    : undefined;

  return (
    <figure className="flex flex-col gap-2">
      <Image
        src={photo.src}
        alt={photo.caption}
        width={photo.width}
        height={photo.height}
        className="rounded-lg object-cover w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...(srcSet ? { srcSet } : {})}
        loading="lazy"
      />
      <figcaption className="text-center text-sm text-primary-light">
        {photo.caption}
      </figcaption>
    </figure>
  );
} 