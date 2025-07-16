// src/app/_components/mdx-layout.tsx
import markdownStyles from "./markdown-styles.module.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <div className={markdownStyles["markdown"]}>{children}</div>;
} 