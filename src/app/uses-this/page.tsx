import fs from 'fs';
import path from 'path';
import markdownToHtml from '@/lib/markdownToHtml';
import { PostBody } from '@/app/_components/post-body';
import PostLayout from '../_components/post-layout';

export const metadata = {
  title: 'Uses This',
  description: 'A deeper exploration of my tech stack, hardware, and services I use daily.',
};

export default async function UsesThisPage() {
  const filePath = path.join(process.cwd(), '_pages', 'uses-this.md');
  const markdownContent = fs.readFileSync(filePath, 'utf-8');
  const content = await markdownToHtml(markdownContent);

  return (
    <PostLayout breadcrumb={{ text: 'uses-this', href: '/uses-this' }}>
      <PostBody content={content} />
    </PostLayout>
  );
} 