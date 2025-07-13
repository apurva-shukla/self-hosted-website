import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export const metadata = {
  title: 'Blog',
  description: 'Read my latest articles and thoughts.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  
  // Use dummy data for example
  const posts = [
    { title: "This is a two line blog title. This is a two line blog title. This is a two line blog title.", date: "2025-June-12" },
    { title: "This is a one line title", date: "2025-June-12" },
    { title: "This is a one line title", date: "2025-June-12" },
    { title: "This is a one line title", date: "2025-June-12" },
    { title: "This is a one line title", date: "2025-June-12" },
    { title: "This is a one line title", date: "2025-June-12" },
    { title: "This is a one line title", date: "2025-June-12" },
    { title: "This is a one line title", date: "2025-June-12" },
  ];
  
  return (
    <main className="relative w-full min-h-screen bg-hero-bg">
      {/* Header/blog */}
      <div className="absolute w-[617px] h-[64px] left-32 top-40 font-jjannon font-normal text-[48px] leading-[58px] flex items-center text-primary/10">
        Apurva Shukla/blog
      </div>
      
      {/* Blog Content Rows */}
      <div className="absolute w-[1256px] left-32 top-[279px]">
        {posts.map((post, index) => (
          <div key={index} className="mb-8">
            <div className="flex flex-row items-center justify-between">
              <h2 className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
                {post.title}
              </h2>
              
              <span className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
                {post.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 