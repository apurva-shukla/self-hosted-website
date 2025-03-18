// Override Next.js default types for App Router pages
declare namespace JSX {
  interface IntrinsicAttributes {
    // Add support for the searchParams prop in the pages
    searchParams?: Record<string, string | string[] | undefined>;
  }
}

// Define Next.js App Router page parameters
declare module 'next' {
  export interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[] | undefined>;
  }
}

// Define types for Next.js App Router pages
declare module 'next/dist/client/components/route' {
  interface PageComponent<
    P extends Record<string, unknown> = {},
    IP = P
  > {
    ({ params, searchParams }: {
      params: Record<string, string>;
      searchParams?: Record<string, string | string[] | undefined>;
    }): Promise<React.ReactElement> | React.ReactElement;
  }
} 