import PostLayout from '../_components/post-layout';
import MdxLayout from '../_components/mdx-layout';
import NycRecsContent from '@/_pages/nyc-recs.mdx';

export const metadata = {
  title: 'NYC Recommendations',
  description: 'My favorite places to eat and drink in New York City.',
};

export default async function NycRecsPage() {
  return (
    <PostLayout breadcrumb={{ text: 'nyc-recs', href: '/nyc-recs' }}>
      <MdxLayout>
        <NycRecsContent />
      </MdxLayout>
    </PostLayout>
  );
} 