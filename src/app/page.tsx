import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import sizeOf from "image-size";
import path from "path";
import fs from "fs";

export default function Index() {
  const imagePath = path.join(
    process.cwd(),
    "public/assets/profile/profile.jpg",
  );
  const buffer = fs.readFileSync(imagePath);
  const dimensions = sizeOf(buffer);

  return (
    <main className="flex items-center justify-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full max-w-6xl">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-12 lg:gap-0 lg:justify-between">
          {/* Bio */}
          <div className="flex flex-col gap-6">
            <h1 className="font-jjannon font-normal text-[40px] leading-[58px] text-primary">
              Apurva Shukla
            </h1>
            <p className="font-jjannon font-normal text-[25px] leading-[30px] text-primary">
              NYC-based product manager and marketer, passionate about tinkering
              with software.
              <br />
              <br />I currently work at{" "}
              <a
                href="https://www.rippling.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-highlight"
              >
                Rippling
              </a>{" "}
              on GTM innovation/engineering projects to acquire new customers in
              the US.
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-2">
              <Link
                href="/blog"
                className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline"
              >
                &gt; blog
              </Link>
              {/* <Link href="/bookshelf" className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline">
                  &gt; bookshelf
                </Link> */}
              <Link
                href="/uses-this"
                className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline"
              >
                &gt; uses this
              </Link>
              <Link
                href="/nyc-recs"
                className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline"
              >
                &gt; nyc recs
              </Link>
              <Link
                href="/photos"
                className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline"
              >
                &gt; photos
              </Link>
              <Link
                href="/about"
                className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light hover:underline"
              >
                &gt; about me
              </Link>
            </div>
            <div className="flex flex-row gap-6">
              <a
                href="https://x.com/shukla_apurva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to X profile"
              >
                <FaXTwitter className="text-primary-light h-6 w-6 opacity-50 hover:opacity-100 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/apurvarshukla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to GitHub profile"
              >
                <FaGithub className="text-primary-light h-6 w-6 opacity-50 hover:opacity-100 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/apurvarshukla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to LinkedIn profile"
              >
                <FaLinkedin className="text-primary-light h-6 w-6 opacity-50 hover:opacity-100 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right image - hidden on mobile */}
        <div className="hidden lg:flex w-full lg:w-2/5 items-center justify-center">
          <Image
            src="/assets/profile/profile.jpg"
            alt="Profile of Apurva Shukla"
            width={dimensions.width}
            height={dimensions.height}
            className="object-cover w-full h-full rounded-2xl shadow-lg"
            priority={true}
          />
        </div>
      </section>
    </main>
  );
}