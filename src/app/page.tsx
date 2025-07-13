import Container from "@/app/_components/container";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/api";
import DateFormatter from "@/app/_components/date-formatter";

export default function Index() {
  const featuredPosts = getAllPosts().slice(0, 3);
  
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 w-full">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-instrument font-normal tracking-tight mb-6">
                Hi, I'm <span className="text-blue-600">Apurva Shukla</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Software engineer, avid reader, and lifelong learner. I write about programming, personal development, and books that have shaped my thinking.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/posts" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
                >
                  Read the Blog
                </Link>
                <Link 
                  href="/bookshelf" 
                  className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-medium"
                >
                  Explore My Bookshelf
                </Link>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square max-w-sm rounded-full overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                {/* Replace with your profile image */}
                <span className="text-lg">Profile Image</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col items-start mb-10">
            <h2 className="text-3xl md:text-4xl font-instrument mb-4">Latest Posts</h2>
            <Link 
              href="/posts" 
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-lg font-medium"
            >
              View all posts →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={post.coverImage} 
                      alt={`Cover image for ${post.title}`} 
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      fill
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-500 text-sm mb-2">
                      <DateFormatter dateString={post.date} />
                    </p>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 flex-1">{post.excerpt.substring(0, 120)}...</p>
                    <p className="text-blue-600 mt-4 font-medium group-hover:underline">Read more</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-instrument mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-4">
                I'm a software engineer passionate about creating meaningful digital experiences and sharing knowledge.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This blog is where I document my journey, share insights on software development, and review books that have influenced my thinking and approach to life and work.
              </p>
              <Link 
                href="/about" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-lg font-medium"
              >
                Learn more about me →
              </Link>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Software engineer specializing in web development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Avid reader with a focus on non-fiction and technical books</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Constantly learning and experimenting with new technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Passionate about productivity systems and personal knowledge management</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-instrument mb-6">Let's Connect</h2>
            <p className="text-xl mb-8">
              Explore my blog, check out my bookshelf, or just say hello. I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/posts" 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-medium"
              >
                Read the Blog
              </Link>
              <Link 
                href="/bookshelf" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
              >
                Explore My Bookshelf
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}