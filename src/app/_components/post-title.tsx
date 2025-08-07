import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 mt-12 text-center md:text-left" 
       style={{
         fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
         letterSpacing: '0.05px',
         textRendering: 'optimizeLegibility',
         WebkitFontSmoothing: 'antialiased',
         MozOsxFontSmoothing: 'grayscale',
         color: 'var(--heading)'
       }}>
      {children}
    </h1>
  );
}
