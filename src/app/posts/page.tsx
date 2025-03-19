import Container from "@/app/_components/container";
import { PostPreview } from "@/app/_components/post-preview";
import { getAllPosts } from "@/lib/api";

export const metadata = {
  title: 'Blog',
  description: 'Read my latest articles and thoughts.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <main className="py-12">
      <Container>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-12">
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600 dark:text-gray-400">
            No posts found. Check back soon!
          </p>
        )}
      </Container>
    </main>
  );
} 