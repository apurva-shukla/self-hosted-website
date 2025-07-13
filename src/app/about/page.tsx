import Link from "next/link";

export const metadata = {
  title: 'About Me',
  description: 'Learn more about Apurva Shukla',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-4xl">
        {/* Header with clickable name */}
        <div className="mb-12 font-jjannon font-normal text-[32px] sm:text-[48px] leading-tight text-primary/10">
          <Link href="/" className="hover:text-primary hover:underline transition-colors">
            Apurva Shukla
          </Link>
          /about me
        </div>
        
        {/* Content */}
        <div className="font-jjannon font-normal text-[20px] sm:text-[24px] leading-relaxed sm:leading-loose text-primary-light flex flex-col gap-6">
          <p>
            I'm a NYC-based marketer (and self-taught developer) who blends marketing craft and growth instincts.
          </p>
          <p>
            I currently work at Rippling on GTM innovation/engineering projects to acquire new customers in the US.
          </p>
          <p>
            When I'm not working, you can find me reading, exploring new coffee shops around the city, or tinkering with side projects.
          </p>
          <p>
            This website is one of those projects—a place for me to share my thoughts, reading list, and city recommendations.
          </p>
        </div>
      </div>
    </main>
  );
} 