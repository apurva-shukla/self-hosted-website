import Link from 'next/link';
import Image from 'next/image';

type HeroProps = {
  image?: string;
  title: string;
  bio: string;
  links?: {
    text: string;
    href: string;
  }[];
};

const HeroSection = ({
  image,
  title,
  bio,
  links = [
    { text: 'blog', href: '/posts' },
    { text: 'bookshelf', href: '/bookshelf' },
    { text: 'nyc recs', href: '/nyc-recommendations' },
    { text: 'about me', href: '/about' },
  ],
}: HeroProps) => {
  return (
    <section className="relative w-full h-[982px] bg-hero-bg">
      <div className="grid grid-cols-12 gap-[20px] h-full">
        {/* Left Content */}
        <div className="col-span-6 col-start-2 flex flex-col justify-center">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-[48px] font-jjannon font-[450] leading-[58px] text-primary">
                {title}
              </h1>
              <p className="text-[30px] font-jjannon font-[450] leading-[36px] text-primary">
                {bio}
              </p>
            </div>
            
            <div className="mt-[20px]">
              <ul className="space-y-[39px]">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span className="text-[24px] font-jjannon font-[450] leading-[29px] text-primary-light">
                        &gt; {link.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        {image && (
          <div className="col-span-4 col-start-8 flex items-center">
            <div className="w-[490px] h-[648px] bg-[#D9D9D9] relative">
              <Image 
                src={image}
                alt={`${title} hero image`}
                fill
                objectFit="cover"
              />
            </div>
          </div>
        )}
        {!image && (
          <div className="col-span-4 col-start-8 flex items-center">
            <div className="w-[490px] h-[648px] bg-[#D9D9D9]"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;