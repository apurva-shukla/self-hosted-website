'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/posts' },
    { label: 'Bookshelf', href: '/bookshelf' },
  ];

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          <Link 
            href="/" 
            className="text-xl font-bold transition-colors duration-200 hover:text-blue-600 focus:outline-none focus-visible:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
          >
            Apurva Shukla
          </Link>
          
          <div className="flex items-center">
            <div className="hidden sm:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  } transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md p-1`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 