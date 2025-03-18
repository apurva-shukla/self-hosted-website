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

4. **Footer Removal**:
   - Removed the default Next.js footer from the layout
   - Eliminated "Statically Generated with Next.js" message
   - Created cleaner, more professional appearance for the website

5. **Bookshelf Page Enhancements**:
   - Implemented a new card-based layout with horizontal orientation
   - Added book cover images with max height of 150px
   - Created a two-column grid layout for medium and larger screens
   - Added category tags with red background styling
   - Fixed issues with data structure (using singular 'category' property)
   - Ensured server component compatibility by removing client-side hooks
   - Added proper error handling for missing properties
   - Improved visual hierarchy with title, author, and description formatting

6. **Interactive Category Filtering**:
   - Implemented client-side category filtering functionality
   - Created a separate CategoryFilter client component with 'use client' directive
   - Used URL search parameters to maintain filter state across page refreshes
   - Implemented server-side filtering based on URL parameters
   - Added visual feedback for the currently selected category
   - Ensured filter state persists in the URL for shareable filtered views
   - Improved user experience with smooth transitions between filtered views

7. **Category Color System**:
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

## Technical Implementation Details:
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

## Next Steps for Further Enhancements:
1. **Data Management**:
   - Move book data to a separate data file or API endpoint
   - Consider implementing a CMS for easier content management
   - Add more book entries with complete metadata

2. **UI Improvements**:
   - Add hover effects to book cards for better interactivity
   - Implement skeleton loading states for better UX
   - Consider adding pagination for larger book collections
   - Add sorting options (by title, author, date added)

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
   - Implement focus states for interactive elements

6. **Analytics Integration**:
   - Add page view tracking
   - Implement event tracking for book link clicks
   - Consider adding heatmap tracking for UI optimization

7. **SEO Enhancements**:
   - Add structured data for books (Schema.org BookEdition)
   - Optimize meta descriptions and titles
   - Implement canonical URLs for book pages
   - Add OpenGraph and Twitter card metadata
