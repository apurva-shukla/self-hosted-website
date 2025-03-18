// Override Next.js default types for App Router pages
declare namespace JSX {
  interface IntrinsicAttributes {
    // Add support for the searchParams prop in the pages
    searchParams?: Record<string, string | string[] | undefined>;
  }
} 