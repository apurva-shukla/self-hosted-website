import Container from "@/app/_components/container";
import Image from "next/image";

export default function Index() {
  return (
    <main className="min-h-screen py-12">
      <Container>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 md:mb-0">
            {/* Replace /your-photo.jpg with your actual photo path */}
            <Image
              src="/placeholder-profile.jpg"
              alt="Apurva Shukla"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Apurva Shukla
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Making this website
            </p>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
