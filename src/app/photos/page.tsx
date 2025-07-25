import { getAllPhotos } from '@/lib/photoEvents';
import PhotoCard from './photo-card';
import Link from 'next/link';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function PhotosPage() {
  const photos = getAllPhotos();
  
  // Ensure photos is always an array even if there's an error
  const safePhotos = Array.isArray(photos) ? photos : [];

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-2xl">
        {/* Header with clickable name */}
        <div className="mb-12 font-jjannon font-normal text-[32px] sm:text-[48px] leading-tight text-primary/10">
          <Link href="/" className="hover:text-primary hover:underline transition-colors">
            Apurva Shukla
          </Link>
          /photos
        </div>

        <div className="space-y-16">
          {safePhotos.map((photo, idx) => (
            <PhotoCard key={idx} photo={photo} />
          ))}
        </div>
      </div>
    </main>
  );
}