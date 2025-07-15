import { Metadata, PageProps } from "@/lib/types";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import PostLayout from "@/app/_components/post-layout";
import { PostBody } from "@/app/_components/post-body";

export default async function Post({ params }: PageProps) {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  // For draft posts, check if we're in development mode
  if (post.draft && process.env.NODE_ENV === 'production') {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <PostLayout>
      <h1 className="w-full font-jjannon font-normal text-4xl md:text-6xl leading-tight md:leading-snug text-black mb-8">
        {post.title}
      </h1>
      <PostBody content={content} />
    </PostLayout>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  const post = getPostBySlug(slug);

  if (!post || (post.draft && process.env.NODE_ENV === 'production')) {
    return notFound();
  }

  const title = `AS | ${post.title}`;

  return {
    title,
    openGraph: {
      title,
      images: [{ url: post.ogImage.url }],
    },
  };
}

export async function generateStaticParams() {
  // Only generate pages for non-draft posts
  const posts = getAllPosts();

  return posts.map((post) => {
    const slugAsArray = post.slug.includes('/') 
      ? post.slug.split('/') 
      : [post.slug];
      
    return {
      slug: slugAsArray,
    };
  });
}
