import Link from "next/link";

type Props = {
  children: React.ReactNode;
  breadcrumb?: {
    text: string;
    href: string;
  };
};

export default function PostLayout({ children, breadcrumb }: Props) {
  const breadcrumbText = breadcrumb?.text ?? 'blog';
  const breadcrumbHref = breadcrumb?.href ?? '/blog';

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-4xl">
        {/* Header with clickable name */}
        <div className="mb-12 font-jjannon font-normal text-2xl md:text-4xl leading-tight text-primary/10">
          <Link href="/" className="hover:text-primary hover:underline transition-colors">
            Apurva Shukla
          </Link>
          /
          <Link href={breadcrumbHref} className="hover:underline hover:text-primary transition-colors">
            {breadcrumbText}
          </Link>
        </div>
        
        {/* Content Frame */}
        <div className="flex flex-col items-start w-full">
          {children}
        </div>
      </div>
    </main>
  );
} 