import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import DateFormatter from "../_components/date-formatter";

export const metadata = {
  title: 'Bookshelf',
  description: 'Books I have read and recommend',
};

export default function Page() {
  const allPosts = getAllPosts();
  const books = allPosts.filter((post) => post.bookSummary);

  return (
    <main className="relative w-full min-h-screen bg-hero-bg">
      {/* Header/bookshelf with clickable name */}
      <div className="absolute w-[617px] h-[64px] left-32 top-40 font-jjannon font-normal text-[48px] leading-[58px] flex items-center text-primary/10">
        <Link href="/" className="text-primary/10 hover:text-primary hover:underline transition-colors">
          Apurva Shukla
        </Link>
        /
        <Link href="/bookshelf" className="hover:underline hover:text-primary transition-colors">
          bookshelf
        </Link>
      </div>
      
      {/* Bookshelf Content Rows */}
      <div className="absolute w-[1256px] h-auto left-32 top-[279px]">
        {books.map((book, index) => (
          <div key={index} className="absolute w-[1256px] h-[58px]" style={{ top: `${index * 88}px` }}>
            <div className="flex flex-row items-center gap-5">
              {/* Heading */}
              <div className="flex flex-row items-center w-[746px] h-[58px]">
                <h2 className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
                  <Link href={`/posts/${book.slug}`} className="hover:underline">
                    {book.title}
                  </Link>
                </h2>
              </div>
              
              {/* Tag */}
              <div className="flex flex-row justify-start items-center w-[235px] h-[29px]">
                <span className="font-jjannon font-normal text-[24px] leading-[29px] text-left text-primary-light/50">
                  {book.category}
                </span>
              </div>
              
              {/* Date */}
              <div className="flex flex-row justify-end items-center w-[235px] h-[29px]">
                <span className="font-jjannon font-normal text-[24px] leading-[29px] text-right text-primary-light/50">
                  <DateFormatter dateString={book.date} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}