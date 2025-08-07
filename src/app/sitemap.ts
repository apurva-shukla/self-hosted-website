import { getAllPosts } from '@/lib/api';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const siteUrl = 'https://ashukla.co';

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
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