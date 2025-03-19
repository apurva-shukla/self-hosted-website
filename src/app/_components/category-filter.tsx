'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type CategoryFilterProps = {
  categories: string[];
  currentCategory?: string;
}

// Function to get the CSS class for a category
const getCategoryClass = (category: string, isSelected: boolean): string => {
  const baseSelectedClass = "text-white";
  const baseUnselectedClass = "text-white opacity-60 hover:opacity-100";
  
  switch(category) {
    case 'All':
      return isSelected 
        ? `bg-category-all ${baseSelectedClass}` 
        : `bg-category-all ${baseUnselectedClass}`;
    case 'Programming':
      return isSelected 
        ? `bg-category-programming ${baseSelectedClass}` 
        : `bg-category-programming ${baseUnselectedClass}`;
    case 'Personal Development':
      return isSelected 
        ? `bg-category-personal-development ${baseSelectedClass}` 
        : `bg-category-personal-development ${baseUnselectedClass}`;
    case 'Productivity':
      return isSelected 
        ? `bg-category-productivity ${baseSelectedClass}` 
        : `bg-category-productivity ${baseUnselectedClass}`;
    default:
      return isSelected 
        ? `bg-gray-500 ${baseSelectedClass}` 
        : `bg-gray-400 ${baseUnselectedClass}`;
  }
};

export default function CategoryFilter({ categories, currentCategory = 'All' }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      
      return params.toString();
    },
    [searchParams]
  );
  
  const handleCategoryChange = (category: string) => {
    router.push(`/bookshelf?${createQueryString('category', category)}`);
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 rounded-md transition-all ${
            getCategoryClass(category, category === currentCategory)
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105`}
          aria-pressed={category === currentCategory}
          aria-label={`Filter by ${category} category`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 