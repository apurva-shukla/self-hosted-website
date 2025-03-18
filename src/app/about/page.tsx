import Container from "@/app/_components/container";
import Image from "next/image";

export const metadata = {
  title: 'About Me',
  description: 'Learn more about my background, skills, and interests.',
};

export default function AboutPage() {
  return (
    <main className="py-12">
      <Container>
        <article className="prose dark:prose-invert mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h1>
          
          <div className="mb-12">
            <Image
              src="/placeholder-profile.jpg"
              alt="Profile Photo"
              width={300}
              height={300}
              className="rounded-lg mx-auto"
              priority
            />
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <p>
              [Your background story and professional journey]
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Languages</h3>
                <ul>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  {/* Add more languages */}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  {/* Add more frontend skills */}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  {/* Add more backend skills */}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Company Name • 2020 - Present</p>
                <ul>
                  <li>Key achievement or responsibility</li>
                  <li>Another significant contribution</li>
                  {/* Add more points */}
                </ul>
              </div>
              {/* Add more experience items */}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div>
              <h3 className="text-xl font-semibold">Degree Name</h3>
              <p className="text-gray-600 dark:text-gray-400">University Name • Graduation Year</p>
              <p>Brief description or achievements during education</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Interests & Hobbies</h2>
            <p>
              Share a bit about what you enjoy outside of work - this helps create a more
              personal connection with visitors to your site.
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
} 