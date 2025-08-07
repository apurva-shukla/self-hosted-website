import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostLayout from "@/app/_components/post-layout";
import { PostBody } from "@/app/_components/post-body";

export default async function Post({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const { slug: incomingSlug } = await params;
  const slug = Array.isArray(incomingSlug) ? incomingSlug.join('/') : incomingSlug;
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
      <h1 className="w-full font-normal text-4xl md:text-6xl leading-tight md:leading-snug text-primary mb-8">
        {post.title}
      </h1>
      <PostBody content={content} />
    </PostLayout>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string | string[] }> }): Promise<Metadata> {
  const { slug: incomingSlug } = await params;
  const slug = Array.isArray(incomingSlug) ? incomingSlug.join('/') : incomingSlug;
  const post = getPostBySlug(slug);

  if (!post || (post.draft && process.env.NODE_ENV === 'production')) {
    return notFound();
  }

  const siteUrl = 'https://ashukla.co';
  const title = `AS | ${post.title}`;
  const url = `${siteUrl}/posts/${post.slug}`;

  const ogImages = post.ogImage?.url ? [{ url: post.ogImage.url }] : undefined;

  return {
    title,
    description: post.excerpt ?? undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.excerpt ?? undefined,
      type: 'article',
      url,
      images: ogImages,
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
