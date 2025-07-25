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

// Fallback Metadata type for Next.js App Router
export interface Metadata {
  title?: string | null;
  description?: string | null;
  openGraph?: {
    title?: string | null;
    description?: string | null;
    images?: string | { url: string }[] | null;
    [key: string]: any;
  };
  [key: string]: any;
} 

export interface PhotoEvent {
  slug: string;
  caption: string;
  images: string[];
} 

export interface Photo {
  src: string;
  width: number;
  height: number;
  caption: string;
  widths?: number[]; // available responsive widths (for srcset)
} 