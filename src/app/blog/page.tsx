import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import DateFormatter from "../_components/date-formatter";

export const metadata = {
  title: 'Blog',
  description: 'Read my latest articles and thoughts.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter(post => !post.bookSummary);
  
  return (
    <main className="relative w-full min-h-screen bg-hero-bg">
      {/* Header/blog with clickable name */}
      <div className="absolute w-[617px] h-[64px] left-32 top-40 font-jjannon font-normal text-[48px] leading-[58px] flex items-center text-primary/10">
        <Link href="/" className="text-primary/10 hover:text-primary hover:underline transition-colors">
          Apurva Shukla
        </Link>
        /blog
      </div>
      
      {/* Blog Content Rows */}
      <div className="absolute w-[1256px] left-32 top-[279px] h-auto">
        {posts.map((post, index) => (
          <div key={index} className="absolute w-[1256px] h-[58px]" style={{ top: `${index * 88}px` }}>
            <div className="flex flex-row items-center justify-between">
              <h2 className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              
              <span className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light/50">
                <DateFormatter dateString={post.date} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 