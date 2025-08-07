import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/api';

export const dynamic = 'force-static';

const SITE_URL = 'https://ashukla.co';

function escapeCDATA(value: string) {
  return value.replace(/\]\]>/g, ']]]]><![CDATA[>');
}

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/posts/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const description = post.excerpt ?? '';
      return `
        <item>
          <title><![CDATA[${escapeCDATA(post.title)}]]></title>
          <link>${link}</link>
          <guid>${link}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${escapeCDATA(description)}]]></description>
        </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title><![CDATA[Apurva Shukla]]></title>
      <link>${SITE_URL}</link>
      <description><![CDATA[My internet corner 🪴]]></description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
} 