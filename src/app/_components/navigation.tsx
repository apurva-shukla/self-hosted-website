'use client';

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative w-[617px] h-[186px] ml-32 mt-10">
      <Link href="/blog" className="absolute top-0 left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
        &gt; blog
      </Link>
      <Link href="/bookshelf" className="absolute top-[39px] left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
        &gt; bookshelf
      </Link>
      <Link href="/nyc-recs" className="absolute top-[78px] left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
        &gt; nyc recs
      </Link>
      <Link href="/about" className="absolute top-[117px] left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
        &gt; about me
      </Link>
      <Link href="/photos" className="absolute top-[156px] left-0 font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
        &gt; photos
      </Link>
    </nav>
  );
} 