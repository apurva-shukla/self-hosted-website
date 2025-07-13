import { Metadata } from "@/lib/types";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import PostLayout from "@/app/_components/post-layout";
import { PostBody } from "@/app/_components/post-body";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

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
      <h1 className="w-[1001px] h-[80px] font-jjannon font-normal text-[40px] leading-[48px] text-black mb-8">
        {post.title}
      </h1>
      <PostBody content={content} />
    </PostLayout>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post || (post.draft && process.env.NODE_ENV === 'production')) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

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

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
