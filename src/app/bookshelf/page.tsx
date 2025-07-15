// import { getAllPosts } from "@/lib/api";
// import Link from "next/link";
// import DateFormatter from "../_components/date-formatter";

// export const metadata = {
//   title: 'Bookshelf',
//   description: 'Books I have read and recommend',
// };

// export default function Page() {
//   const allPosts = getAllPosts();
//   const books = allPosts.filter((post) => post.bookSummary);

//   return (
//     <main className="flex flex-col items-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
//       <div className="w-full max-w-4xl">
//         {/* Header/bookshelf with clickable name */}
//         <div className="mb-12 font-jjannon font-normal text-[32px] sm:text-[48px] leading-tight text-primary/10">
//           <Link href="/" className="hover:text-primary hover:underline transition-colors">
//             Apurva Shukla
//           </Link>
//           /
//           <Link href="/bookshelf" className="hover:underline hover:text-primary transition-colors">
//             bookshelf
//           </Link>
//         </div>
        
//         {/* Bookshelf Content Rows */}
//         <div className="flex flex-col gap-8">
//           {books.map((book) => (
//             <div key={book.slug} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//               {/* Title */}
//               <h2 className="font-jjannon font-normal text-[20px] sm:text-[24px] leading-tight text-primary-light w-full sm:w-2/3">
//                 <Link href={`/posts/${book.slug}`} className="hover:underline">
//                   {book.title}
//                 </Link>
//               </h2>
              
//               <div className="flex flex-row sm:flex-col md:flex-row justify-between items-start md:items-center w-full sm:w-1/3 gap-4 md:gap-0">
//                 {/* Category */}
//                 <span className="font-jjannon font-normal text-[16px] sm:text-[20px] leading-tight text-primary-light/50 text-left w-full md:w-1/2">
//                   {book.category}
//                 </span>
                
//                 {/* Date */}
//                 <span className="font-jjannon font-normal text-[16px] sm:text-[20px] leading-tight text-primary-light/50 text-left md:text-right w-full md:w-1/2">
//                   <DateFormatter dateString={book.date} />
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

import Link from 'next/link';

export const metadata = {
  title: 'Bookshelf',
  description: 'A list of books I have read and recommend. This page is a work in progress.',
};

export default function BookshelfPage() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-4xl">
        <div className="mb-12 font-jjannon font-normal text-[32px] sm:text-[48px] leading-tight text-primary/10">
          <Link href="/" className="hover:text-primary hover:underline transition-colors">
            Apurva Shukla
          </Link>
          /bookshelf
        </div>
        
        <div className="font-jjannon font-normal text-[24px] leading-[29px] text-primary-light">
          <p>This page is currently under construction.</p>
          <p>Please check back later for a curated list of my favorite books.</p>
        </div>
      </div>
    </main>
  );
}