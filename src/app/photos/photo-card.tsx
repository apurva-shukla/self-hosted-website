import Image from 'next/image';
import { Photo } from '@/lib/types';

interface Props {
  photo: Photo;
}

export default function PhotoCard({ photo }: Props) {
  return (
    <figure className="flex flex-col gap-2">
      <Image
        src={photo.src}
        alt={photo.caption}
        width={photo.width}
        height={photo.height}
        className="rounded-lg object-cover w-full"
      />
      <figcaption className="text-center text-sm text-primary-light">
        {photo.caption}
      </figcaption>
    </figure>
  );
} 