import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden w-full bg-hero-bg">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        <div className="absolute w-[617px] flex flex-col gap-20 left-32 top-40">
          <div className="flex flex-col gap-6">
            <h1 className="font-jjannon font-normal text-[48px] leading-[58px] text-primary">
              Apurva Shukla
            </h1>
            <p className="font-jjannon font-normal text-[30px] leading-9 text-primary">
            I’m a full-time, NYC-based growth marketer who pursues software engineering as a serious hobby.
              <br /><br />
              I currently work at <a href="https://www.rippling.com" target="_blank" rel="noopener noreferrer" className="hover-highlight">Rippling</a> on GTM innovation/engineering projects to acquire new customers in the US.
              
            </p>
          </div>
          
          <div className="relative w-full h-auto">
            <Link href="/blog" className="absolute top-0 left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline">
              &gt; blog
            </Link>
            <Link href="/bookshelf" className="absolute top-[39px] left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline">
              &gt; bookshelf
            </Link>
            <Link href="/nyc-recs" className="absolute top-[78px] left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline">
              &gt; nyc recs
            </Link>
            <Link href="/about" className="absolute top-[117px] left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline">
              &gt; about me
            </Link>

            <div className="absolute top-[180px] left-0 flex flex-row gap-6">
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
        
        {/* Hero right image */}
        <div className="absolute w-[490px] h-[648px] left-[894px] top-40 flex items-center justify-center">
          <img
            src="/assets/profile/profile.jpg"
            alt="Profile of Apurva Shukla"
            className="object-cover w-full h-full rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}