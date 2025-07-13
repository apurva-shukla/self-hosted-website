import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function PostLayout({ children }: Props) {
  return (
    <main className="relative w-full min-h-screen bg-hero-bg">
      {/* Header with clickable name */}
      <div className="absolute w-[617px] h-[64px] left-32 top-40 font-jjannon font-normal text-[48px] leading-[58px] flex items-center text-primary/10">
        <Link href="/" className="text-primary/10 hover:text-primary hover:underline transition-colors">
          Apurva Shukla
        </Link>
        /
        <Link href="/blog" className="hover:underline hover:text-primary transition-colors">
          blog
        </Link>
      </div>
      
      {/* Content Frame */}
      <div className="absolute w-[1001px] flex flex-col items-start left-32 top-[279px]">
        {children}
      </div>
    </main>
  );
} 