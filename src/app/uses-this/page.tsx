import PostLayout from '../_components/post-layout';
import MdxLayout from '../_components/mdx-layout';
import UsesThisContent from '@/_pages/uses-this.mdx';

export const metadata = {
  title: 'Uses This',
  description: 'A deeper exploration of my tech stack, hardware, and services I use daily.',
};

export default async function UsesThisPage() {
  return (
    <PostLayout breadcrumb={{ text: 'uses-this', href: '/uses-this' }}>
      <MdxLayout>
        <UsesThisContent />
      </MdxLayout>
    </PostLayout>
  );
}  