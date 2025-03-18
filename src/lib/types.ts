// Type definitions for Next.js App Router

// Search params type
export type SearchParams = { 
  [key: string]: string | string[] | undefined 
};

// Page props type for Next.js App Router
export type PageProps = {
  params?: { [key: string]: string };
  searchParams?: SearchParams;
};

// Use this for a complete type definition
export type AppRouterPageProps<T extends Record<string, string> = {}> = {
  params: T;
  searchParams?: SearchParams;
}; 