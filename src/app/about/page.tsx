import Link from "next/link";

export const metadata = {
  title: 'About Me',
  description: 'Learn more about Apurva Shukla',
};

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-hero-bg">
      {/* Header with clickable name */}
      <div className="absolute w-[617px] h-[64px] left-32 top-40 font-jjannon font-normal text-[48px] leading-[58px] flex items-center text-primary/10">
        <Link href="/" className="text-primary/10 hover:text-primary/20 transition-colors">
          Apurva Shukla
        </Link>
        /about me
      </div>
      
      {/* Content */}
      <div className="absolute w-[1001px] flex flex-col items-start left-32 top-[279px]">
        <div className="font-jjannon font-normal text-[20px] leading-[40px] text-black">
          <p className="mb-6">
            I'm a NYC-based marketer (and self-taught developer) who blends marketing craft and growth instincts.
          </p>
          <p className="mb-6">
            I currently work at Rippling on GTM innovation/engineering projects to acquire new customers in the US.
          </p>
          <p className="mb-6">
            When I'm not working, you can find me reading, exploring new coffee shops around the city, or tinkering with side projects.
          </p>
          <p className="mb-6">
            This website is one of those projects—a place for me to share my thoughts, reading list, and city recommendations.
          </p>
        </div>
      </div>
    </main>
  );
} 