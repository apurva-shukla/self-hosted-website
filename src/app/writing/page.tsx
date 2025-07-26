import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import DateFormatter from "../_components/date-formatter";

export const metadata = {
  title: 'Writing',
  description: 'Read my latest articles and thoughts.',
};

export default function WritingPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter(post => !post.bookSummary);
  
  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-4xl">
        {/* Header/writing with clickable name */}
        <div className="mb-12 font-jjannon font-normal text-[32px] sm:text-[48px] leading-tight text-primary/10">
          <Link href="/" className="hover:text-primary hover:underline transition-colors">
            Apurva Shukla
          </Link>
          /writing
        </div>
        
        {/* Writing Content Rows */}
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="font-jjannon font-normal text-[20px] sm:text-[24px] leading-tight text-primary-light w-full sm:w-2/3">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              
              <span className="font-jjannon font-normal text-[16px] sm:text-[20px] leading-tight text-primary-light/50 text-left sm:text-right w-full sm:w-1/3">
                <DateFormatter dateString={post.date} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 