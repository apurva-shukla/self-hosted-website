import PostLayout from '../_components/post-layout';
import MdxLayout from '../_components/mdx-layout';
import AboutContent from '@/_pages/about.mdx';

export const metadata = {
  title: 'About',
  description: 'About me.',
};

export default async function AboutPage() {
  return (
    <PostLayout breadcrumb={{ text: 'about', href: '/about' }}>
      <MdxLayout>
        <AboutContent />
      </MdxLayout>
    </PostLayout>
  );
} 