import markdownStyles from "./markdown-styles.module.css";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import Image from "next/image";

type Props = {
  content: string;
};

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === "img" && domNode.attribs) {
      const { src, alt, width, height, class: className } = domNode.attribs;

      if (src && alt && width && height) {
        return (
          <Image
            src={src}
            alt={alt}
            width={parseInt(width, 10)}
            height={parseInt(height, 10)}
            className={className}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 800px, 900px"
          />
        );
      }
    }
  },
};

export function PostBody({ content }: Props) {
  return (
    <div className="w-full">
      <div className={markdownStyles["markdown"]}>{parse(content, options)}</div>
    </div>
  );
}
