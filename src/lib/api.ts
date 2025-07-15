import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join, relative } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  // A recursive function to find all markdown files
  const findMarkdownFiles = (dir: string): string[] => {
    let files: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(findMarkdownFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      }
    }
    return files;
  };

  const allFilePaths = findMarkdownFiles(postsDirectory);

  // Convert full paths to slugs (relative paths without .md)
  return allFilePaths.map((path) =>
    relative(postsDirectory, path).replace(/\.md$/, "")
  );
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(includeDrafts: boolean = false): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // Filter out drafts if includeDrafts is false
    .filter((post) => includeDrafts || post.draft !== true)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// Get all posts including drafts
export function getAllPostsIncludingDrafts(): Post[] {
  return getAllPosts(true);
}
