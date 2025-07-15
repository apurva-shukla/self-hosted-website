import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import DateFormatter from "../_components/date-formatter";

export const metadata = {
  title: 'Blog',
  description: 'Read my latest articles and thoughts.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  
  return (
    <main className="relative w-full min-h-screen bg-hero-bg p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-12 font-jjannon font-normal text-[32px] sm:text-[48px] leading-tight text-primary/10">
          <Link href="/" className="hover:text-primary hover:underline transition-colors">
            Apurva Shukla
          </Link>
          /blog
        </div>
        
        <div className="flex flex-col gap-8">
          {allPosts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug} className="group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <h2 className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light group-hover:underline max-w-xl">
                  {post.title}
                </h2>
                
                <span className="font-jjannon font-normal text-[20px] sm:text-[24px] leading-[29px] text-primary-light/70 mt-2 sm:mt-0 flex-shrink-0 sm:ml-4">
                  <DateFormatter dateString={post.date} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 