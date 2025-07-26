import { getAllPosts } from '@/lib/api';

export default function sitemap() {
  const posts = getAllPosts();
  const siteUrl = 'https://ashukla.co';

  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/writing`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/bookshelf`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/nyc-recs`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
} 