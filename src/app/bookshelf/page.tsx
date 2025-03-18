import Container from "@/app/_components/container";
import Image from "next/image";
import Link from "next/link";
import CategoryFilter from "@/app/_components/category-filter";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import { Metadata, PageProps } from "@/lib/types";

export const metadata = {
  title: 'Bookshelf',
  description: 'Books I have read and recommend',
};

// Function to determine category based on post content or tags
const getBookCategory = (post: Post): Category => {
  // First check if post has a category field
  if (post.category && categories.includes(post.category as Category)) {
    return post.category as Category;
  }
  
  // Fallback to content-based category detection
  const title = post.title.toLowerCase();
  const content = post.content.toLowerCase();
  
  if (content.includes('programming') || content.includes('code') || 
      title.includes('programmer') || title.includes('programming')) {
    return 'Programming';
  } else if (content.includes('habit') || content.includes('personal development') ||
      title.includes('habit') || title.includes('personal development')) {
    return 'Personal Development';
  } else if (content.includes('productivity') || content.includes('focus') || 
      title.includes('productivity') || title.includes('focus')) {
    return 'Productivity';
  }
  
  return 'Other';
};

// Function to determine if a post is a book review/summary
const isBookPost = (post: Post): boolean => {
  // Check if post has the bookSummary field explicitly set
  if ((post as any).bookSummary === true) {
    return true;
  }
  
  // Fallback to previous detection method for backward compatibility
  if ((post as any).category) {
    return true;
  }
  
  const title = post.title.toLowerCase();
  const content = post.content.toLowerCase();
  const excerpt = post.excerpt.toLowerCase();
  
  // Check for common book-related terms
  const bookTerms = ['book', 'read', 'author', 'novel', 'summary'];
  
  // Check if the post contains book-related terms in title, content or excerpt
  return bookTerms.some(term => 
    title.includes(term) || 
    content.includes(term) || 
    excerpt.includes(term)
  );
};

// Book category type
type Category = 'All' | 'Programming' | 'Personal Development' | 'Productivity' | 'Other';

// Define categories array at module level so it can be used in getBookCategory
const categories: Category[] = ['All', 'Programming', 'Personal Development', 'Productivity', 'Other'];

// Function to get the CSS class for a category
const getCategoryClass = (category: string): string => {
  const baseClass = "text-white";
  
  switch(category) {
    case 'Programming':
      return `bg-category-programming ${baseClass}`;
    case 'Personal Development':
      return `bg-category-personal-development ${baseClass}`;
    case 'Productivity':
      return `bg-category-productivity ${baseClass}`;
    case 'Other':
      return `bg-gray-400 ${baseClass}`;
    default:
      return `bg-gray-500 ${baseClass}`;
  }
};

// NextJS App Router page component
export default function Page({ searchParams }: PageProps) {
  // Get all posts (excluding drafts)
  const allPosts = getAllPosts();
  
  // Filter to only include book posts
  const bookPosts = allPosts.filter(isBookPost);
  
  // Convert posts to book format
  const books = bookPosts.map((post, index) => {
    const category = getBookCategory(post);
    return {
      id: index + 1,
      title: post.title,
      author: post.author.name,
      coverImage: post.coverImage,
      description: post.excerpt,
      link: `/posts/${post.slug}`,
      category: category,
      blogPostSlug: post.slug,
    };
  });
  
  // Get the current category from search params
  const categoryParam = searchParams?.category;
  const currentCategory = typeof categoryParam === 'string' 
    ? (categories.includes(categoryParam as Category) ? categoryParam as Category : 'All')
    : 'All';
  
  // Filter books based on the selected category
  const filteredBooks = currentCategory === 'All' 
    ? books 
    : books.filter(book => book.category === currentCategory);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Bookshelf</h1>
      
      {/* Category filters */}
      <CategoryFilter 
        categories={categories} 
        currentCategory={currentCategory}
      />
      
      {/* Book grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex flex-row p-6">
                <div className="flex-shrink-0 w-1/3">
                  <Link href={`/posts/${book.blogPostSlug}`}>
                    <div className="relative">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        width={200}
                        height={300}
                        className="object-cover max-h-[150px]"
                      />
                    </div>
                  </Link>
                </div>
                
                <div className="ml-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
                  <p className="text-gray-600 mb-2">by {book.author}</p>
                  <p className="text-sm mb-4">{book.description}</p>
                  
                  <div className="mt-auto">
                    {book.category && (
                      <span 
                        className={`inline-block ${getCategoryClass(book.category)} rounded-md px-4 py-1 text-sm`}
                      >
                        {book.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-8">
            <p className="text-lg text-gray-600">No books found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}