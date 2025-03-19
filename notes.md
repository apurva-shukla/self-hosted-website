# Personal Website Implementation Plan

## Phase 1: Navigation and Layout
1. Create a new Navigation component ✓
   - Add navigation bar with logo/name on the left ✓
   - Add right-aligned buttons for About, Blog, and Bookshelf ✓
   - Implement responsive design for mobile view ✓

2. Update layout.tsx ✓
   - Integrate the navigation component ✓
   - Set up consistent padding and max-width constraints ✓

## Phase 2: Home Page
1. Update page.tsx (home page) ✓
   - Add hero section with photo ✓
   - Add short bio section ✓
   - Implement clean, minimal design ✓
   - Ensure responsive layout ✓

## Phase 3: Additional Pages
1. Create new routes:
   - /about - About Me page ✓
   - /blog - Already exists, migrated and styled ✓
   - /bookshelf - New page for book recommendations ✓

## Implementation Order:
1. ✓ Navigation component
2. ✓ Home page redesign
3. ✓ Additional pages

## Design Guidelines:
- Use existing Tailwind setup
- Maintain minimal, clean aesthetic
- Ensure responsive design
- Optimize images
- Keep code lean and maintainable

## Current Status:
- [x] Navigation component
- [x] Home page redesign
- [x] About page
- [x] Blog page styling
- [x] Bookshelf page

## Next Steps for Personalization:
1. Replace "Your Name" with your actual name in:
   - Navigation component
   - Home page

2. Add/Update personal information:
   - Update the bio text on the home page
   - Fill in the About page sections with your details
   - Add your favorite books to the Bookshelf page

3. Customize content:
   - Add your own blog posts to the _posts directory
   - Add real book cover images to `/public/assets/books/`

## Features Implemented:
1. **Navigation**:
   - Clean, responsive navbar
   - Mobile-friendly design
   - Active link highlighting
   - Theme switcher integrated

2. **Home Page**:
   - Hero section with profile photo
   - Brief bio and introduction
   - Clean, responsive layout

3. **About Page**:
   - Comprehensive sections for background, skills, experience, etc.
   - Organized layout with responsive design
   - Profile photo integration

4. **Blog Page**:
   - Displays all posts from _posts directory
   - Grid layout for post previews
   - Individual post pages with full content

5. **Bookshelf Page**:
   - Book recommendations in card layout
   - Integration with blog posts for book summaries
   - Links to both book summaries and official sites
   - Responsive grid design
   - Two-column layout for medium and larger screens
   - Book cover images with max height of 150px
   - Category tags displayed as red pill-shaped badges

## Recent Updates:
1. **Bookshelf-Blog Integration**:
   - Each book card now links to a corresponding blog post
   - Added sample book summary blog posts for:
     - Atomic Habits (atomic-habits-summary.md)
     - The Pragmatic Programmer (pragmatic-programmer-summary.md)
     - Deep Work (deep-work-summary.md)
   - Improved UI with clearer call-to-action buttons
   - Enhanced user flow between book recommendations and detailed reviews

2. **Dark Mode Removal**:
   - Removed ThemeSwitcher component from Navigation
   - Updated layout.tsx to use consistent light mode styling
   - Added CSS overrides in globals.css to ensure light mode styling across the site
   - Fixed blog post YAML frontmatter format for proper rendering

3. **Bug Fixes & Personalization**:
   - Fixed YAML frontmatter in blog posts to resolve rendering errors
   - Added missing quote in author name that was causing server errors
   - Updated site with Apurva Shukla's name throughout:
     - Navigation header
     - Home page title and bio
     - Blog post author information
     - Site metadata and description
   - Customized bio text to focus on software and books

4. **TypeScript OpenGraph Metadata Fix**:
   - Fixed TypeScript errors related to OpenGraph metadata in layout.tsx and posts/[slug]/page.tsx
   - Updated the images property in OpenGraph metadata to use the correct format
   - Changed from array of strings ([HOME_OG_IMAGE_URL]) to array of objects with url property ([{ url: HOME_OG_IMAGE_URL }])
   - Ensured compliance with Metadata type definition from lib/types.ts
   - Resolved all related TypeScript linter errors

5. **Footer Removal**:
   - Removed the default Next.js footer from the layout
   - Eliminated "Statically Generated with Next.js" message
   - Created cleaner, more professional appearance for the website

6. **Bookshelf Page Enhancements**:
   - Implemented a new card-based layout with horizontal orientation
   - Added book cover images with max height of 150px
   - Created a two-column grid layout for medium and larger screens
   - Added category tags with red background styling
   - Fixed issues with data structure (using singular 'category' property)
   - Ensured server component compatibility by removing client-side hooks
   - Added proper error handling for missing properties
   - Improved visual hierarchy with title, author, and description formatting

7. **Interactive Category Filtering**:
   - Implemented client-side category filtering functionality
   - Created a separate CategoryFilter client component with 'use client' directive
   - Used URL search parameters to maintain filter state across page refreshes
   - Implemented server-side filtering based on URL parameters
   - Added visual feedback for the currently selected category
   - Ensured filter state persists in the URL for shareable filtered views
   - Improved user experience with smooth transitions between filtered views

8. **Category Color System**:
   - Added custom category colors in tailwind.config.ts for centralized color management
   - Implemented consistent color scheme across category tags and filter buttons
   - Created color-coded visual system with semantic naming:
     - Programming: Purple
     - Personal Development: Green
     - Productivity: Amber/Orange
     - All: Blue
   - Applied opacity variation to distinguish selected vs. unselected filter buttons
   - Added hover effects to improve interactive feedback
   - Ensured text remains white for optimal readability across all category colors

9. **UI Enhancements**:
   - Added hover effects to book cards with subtle zoom animation (transform: scale(1.02))
   - Improved shadow effect on hover for better depth perception
   - Made entire book cards clickable instead of just the image
   - Removed redundant author attribution when author is "Apurva Shukla"
   - Added proper focus states with blue ring for all interactive elements:
     - Navigation links
     - Category filter buttons
     - Book cards
   - Added aria attributes to category buttons for improved accessibility
   - Added smooth transitions for hover and focus effects

10. **Book Author Display Improvements**:
   - Added dedicated `bookAuthor` field to book post metadata
   - Updated book template with clear separation between post author and book author
   - Implemented smart author extraction from book titles as fallback
   - Applied consistent "By [Author]" format in book cards
   - Updated existing book summaries with proper book author metadata
   - Extended Post interface to include bookAuthor for type safety
   - Created a cleaner separation between content author and book author
   - Standardized metadata across all book summaries (Alice in Wonderland, Atomic Habits, Deep Work, Pragmatic Programmer) to align with the book template

11. **Blog Post Navigation Enhancement**:
   - Completely removed the Header component from individual blog post pages
   - Eliminated the "Blog." heading and navigation element for a cleaner layout
   - Improved visual hierarchy on post pages by removing redundant elements
   - Created a more streamlined reading experience
   - Enhanced focus on the actual content

12. **Layout Consistency Improvements**:
   - Aligned navigation bar with page content for visual consistency
   - Implemented global container configuration in tailwind.config.ts
   - Updated both navigation and content components to use the standardized container
   - Created a more cohesive design with proper alignment of all elements
   - Followed Tailwind best practices for container customization
   - Improved responsive behavior with consistent breakpoints across all screen sizes

13. **Typography Enhancement**:
   - Integrated JJannon Book as the site-wide font family
   - Replaced the default Inter font with a more distinctive typeface
   - Added proper font-face declaration in the global CSS
   - Configured Tailwind to use JJannon Book as the default sans-serif font
   - Created a dedicated font class (font-jjannon) for targeted application
   - Added font-display: swap for better performance during font loading
   - Ensured consistent typography across all pages

# Technical Implementation Details:
1. **Server Component Architecture**:
   - Bookshelf page implemented as a React Server Component
   - Static rendering of book data without client-side state
   - Category buttons present but non-functional (would require client components)
   - Image optimization using Next.js Image component

2. **Data Structure**:
   - Books defined with the following properties:
     - id: number
     - title: string
     - author: string
     - coverImage: string
     - description: string
     - link: string
     - category: string (singular)
     - blogPostSlug: string
   - Categories defined as type: 'All' | 'Programming' | 'Personal Development' | 'Productivity'

3. **Styling Approach**:
   - Tailwind CSS used throughout
   - Responsive design with grid-cols-1 for mobile, grid-cols-2 for larger screens
   - Card-based UI with shadow and rounded corners
   - Consistent spacing and typography
   - Category tags styled as pill-shaped badges

## Project Structure

The project follows the Next.js 14 App Router architecture with a focus on server components and static site generation.

### Root Directory
- `package.json` - NPM dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration with custom colors for categories
- `postcss.config.js` - PostCSS configuration for Tailwind
- `next-env.d.ts` - Next.js TypeScript declarations
- `README.md` - Project documentation
- `notes.md` - Development notes and implementation plan (this file)

### Content Organization
- `_posts/` - Markdown files for blog posts and book summaries
  - Files follow the format: `{slug}.md`
  - Each file includes YAML frontmatter with metadata
  - Book summaries use a consistent format with title, author, cover image, etc.
  - Templates available: `blog-post-template.md`, `book-template.md`

### Source Code (`src/`)
1. **App Directory (`src/app/`)**
   - `page.tsx` - Home page component
   - `layout.tsx` - Root layout with metadata and HTML structure
   - `globals.css` - Global CSS styles and Tailwind imports
   - `types.d.ts` - TypeScript declarations for the app

   **Route Pages:**
   - `about/` - About page route
   - `posts/` - Blog post pages with dynamic routing ([slug])
   - `bookshelf/` - Bookshelf page with book recommendations

   **Components (`_components/`)**
   - `navigation.tsx` - Site-wide navigation bar
   - `container.tsx` - Layout container with consistent max-width
   - `post-*.tsx` - Components for blog post rendering
   - `category-filter.tsx` - Client component for filtering books by category
   - Plus various UI components for blog and bookshelf features

2. **Library (`src/lib/`)**
   - `api.ts` - Functions for fetching blog posts from the filesystem
   - `constants.ts` - Site-wide constants like CMS name and OG image
   - `markdownToHtml.ts` - Markdown processing utilities
   - `types.ts` - TypeScript type definitions for metadata and other shared types

3. **Interfaces (`src/interfaces/`)**
   - TypeScript interfaces for data structures used throughout the app

### Public Assets (`public/`)
- `favicon/` - Favicon files in various formats
- `assets/` - Images and other static assets
  - `books/` - Book cover images
  - `blog/` - Blog post cover images
  - `authors/` - Author profile images

### Next.js Generated Files
- `.next/` - Build output (generated)
- `node_modules/` - Installed dependencies (generated)

## Backlog
1. **Data Management**:
   - Move book data to a separate data file or API endpoint
   - Consider implementing a CMS for easier content management
   - Add more book entries with complete metadata

2. **Content Expansion**:
   - Add "Currently Reading" section at the top
   - Include reading progress indicators
   - Add ratings or personal notes for each book
   - Consider adding book purchase links with affiliate tracking

4. **Performance Optimization**:
- Implement image lazy loading for faster initial page load
- Add proper image sizing and formats (WebP, AVIF)
- Consider implementing Incremental Static Regeneration for dynamic content

5. **Accessibility Improvements**:
- Ensure proper contrast ratios for text
- Add proper ARIA labels for interactive elements
- Test with screen readers and keyboard navigation

6. **Analytics Integration**:
   - Add page view tracking
   - Implement event tracking for book link clicks
   - Consider adding heatmap tracking for UI optimization

2. **SEO Enhancements**:
   - Add structured data for books (Schema.org BookEdition)
   - Optimize meta descriptions and titles
   - Implement canonical URLs for book pages
   - Add OpenGraph and Twitter card metadata

## Next Steps for Further Enhancements:

1. ~~**UI Improvements**:~~
   - ~~Add a subtle zoom in on hover for the book card~~
   - ~~Remove 'by Apurva Shukla' from the bookshelf page~~
   - ~~Make the whole book card clickable to reveal the book summary~~
   - ~~Implement focus states for interactive elements~~

2. **Data Management**:
   - Move book data to a separate data file or API endpoint
   - Consider implementing a CMS for easier content management
   - Add more book entries with complete metadata

3. **Content Expansion**:
   - Add "Currently Reading" section at the top
   - Include reading progress indicators
   - Add ratings or personal notes for each book
   - Consider adding book purchase links with affiliate tracking

4. **Performance Optimization**:
   - Implement image lazy loading for faster initial page load
   - Add proper image sizing and formats (WebP, AVIF)
   - Consider implementing Incremental Static Regeneration for dynamic content

5. **Accessibility Improvements**:
   - Ensure proper contrast ratios for text
   - Add proper ARIA labels for interactive elements
   - Test with screen readers and keyboard navigation

6. **Analytics Integration**:
   - Add page view tracking
   - Implement event tracking for book link clicks
   - Consider adding heatmap tracking for UI optimization

7. **SEO Enhancements**:
   - Add structured data for books (Schema.org BookEdition)
   - Optimize meta descriptions and titles
   - Implement canonical URLs for book pages
   - Add OpenGraph and Twitter card metadata