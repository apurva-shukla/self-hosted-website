import HeroSection from '../_components/hero-section';
import BookshelfList from '../_components/bookshelf-list';
import ContentFrame from '../_components/content-frame';

// Sample data for BookshelfList
const bookshelfItems = [
  {
    title: 'This is a two line blog title. This is a two line blog title. This is a two line blog title.',
    category: 'Fiction',
    date: '2025-June-12'
  },
  {
    title: 'This is a two line blog title. This is a two line blog title. This is a two line blog title.',
    category: 'Fiction',
    date: '2025-June-12'
  },
  {
    title: 'This is a two line blog title. This is a two line blog title. This is a two line blog title.',
    category: 'Fiction',
    date: '2025-June-12'
  },
  {
    title: 'This is a two line blog title. This is a two line blog title. This is a two line blog title.',
    category: 'Fiction',
    date: '2025-June-12'
  }
];

export default function ExamplePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section Example */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold px-4 md:px-8 mb-4">Hero Section Example</h2>
        <HeroSection 
          title="Apurva Shukla" 
          bio="Software engineer, avid reader, and lifelong learner. I write about programming, personal development, and books that have shaped my thinking."
        />
      </div>
      
      {/* Bookshelf List Example */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold px-4 md:px-8 mb-4">Bookshelf List Example</h2>
        <BookshelfList items={bookshelfItems} />
      </div>
      
      {/* Content Frame Example */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold px-4 md:px-8 mb-4">Content Frame Example</h2>
        <ContentFrame 
          title="The Two-Door Policy: Securing My Homelab"
          content="My Proxmox server was humming along, a happy little digital garden of self-hosted services. Home Assistant was managing my smart home, Ad Guard was silencing ads, and a dozen other containers were waiting for their turn to be useful. There was just one problem: my garden was walled off. All these fantastic services were trapped on my local network, inaccessible from the outside world."
          headingLevel="h1"
        />
      </div>
    </div>
  );
}