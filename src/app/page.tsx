import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import CardStack from "./_components/card-stack";
import Image from "next/image";

export default function Index() {
  const showCardStack = true; // Toggle this to show/hide the card stack vs. static image

  const images = [
    { id: 1, img: "/assets/homepage/frame1.png" },
    { id: 2, img: "/assets/homepage/frame2.png" },
    { id: 3, img: "/assets/homepage/frame3.png" },
    { id: 4, img: "/assets/homepage/frame4.png" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full max-w-6xl">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-24">
          {/* Bio */}
          <div className="flex flex-col gap-6">
            <h1 className="font-jjannon font-normal text-[48px] leading-[58px] text-primary">
              Apurva Shukla
            </h1>
            <p className="font-jjannon font-normal text-[25px] leading-9 text-primary">
            NYC-based product manager and marketer, passionate about tinkering with software.
              <br /><br />
              I currently work at <a href="https://www.rippling.com" target="_blank" rel="noopener noreferrer" className="hover-highlight">Rippling</a> on GTM innovation/engineering projects to acquire new customers in the US.
            </p>
          </div>
          
          {/* Links & Socials */}
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-2">
                <Link href="/blog" className="font-jjannon font-normal text-[22px] leading-[27px] text-primary-light hover:underline">
                  &gt; blog
                </Link>
                {/* <Link href="/bookshelf" className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline">
                  &gt; bookshelf
                </Link> */}
                <Link href="/uses-this" className="font-jjannon font-normal text-[22px] leading-[27px] text-primary-light hover:underline">
                  &gt; uses this
                </Link>
                {/* <Link href="/nyc-recs" className="font-jjannon font-normal text-[22px] leading-[27px] text-primary-light hover:underline">
                  &gt; nyc recs
                </Link> */}
                <Link href="/about" className="font-jjannon font-normal text-[22px] leading-[27px] text-primary-light hover:underline">
                  &gt; about me
                </Link>
            </div>
            <div className="flex flex-row gap-6">
              <a href="https://x.com/shukla_apurva" target="_blank" rel="noopener noreferrer" aria-label="Link to X profile">
                <FaXTwitter className="text-primary-light h-6 w-6 opacity-50 hover:opacity-100 hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/apurva-shukla" target="_blank" rel="noopener noreferrer" aria-label="Link to GitHub profile">
                <FaGithub className="text-primary-light h-6 w-6 opacity-50 hover:opacity-100 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/apurvarshukla/" target="_blank" rel="noopener noreferrer" aria-label="Link to LinkedIn profile">
                <FaLinkedin className="text-primary-light h-6 w-6 opacity-50 hover:opacity-100 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right image - hidden on mobile */}
        <div className="rounded-lg hidden lg:flex w-full lg:w-2/5 items-start justify-center">
          {showCardStack ? (
            <CardStack cardsData={images} cardDimensions={{ width: 450, height: 550 }} />
          ) : (
            <Image
              src="/assets/profile/profile.jpg"
              alt="Apurva Shukla profile picture"
              width={450}
              height={550}
              className="object-cover shadow-high-quality"
              priority
            />
          )}
        </div>
      </section>

      <div className="mt-60 text-center font-normal text-[14px] text-primary-light opacity-60">
        <p>
          Custom built Next.js theme in Brooklyn, NYC ❤️
          <br />
          Deployed on Vercel
        </p>
      </div>
    </main>
  );
}