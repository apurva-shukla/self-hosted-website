import fs from 'fs';
import path from 'path';
import markdownToHtml from '@/lib/markdownToHtml';
import { PostBody } from '@/app/_components/post-body';
import PostLayout from '../_components/post-layout';

export const metadata = {
  title: 'NYC Recommendations',
  description: 'My favorite places to eat and drink in New York City.',
};

export default async function NycRecsPage() {
  const filePath = path.join(process.cwd(), '_pages', 'nyc-recs.md');
  const markdownContent = fs.readFileSync(filePath, 'utf-8');
  const content = await markdownToHtml(markdownContent);

  return (
    <PostLayout breadcrumb={{ text: 'nyc-recs', href: '/nyc-recs' }}>
      <PostBody content={content} />
    </PostLayout>
  );
} 