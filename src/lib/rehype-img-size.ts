import { visit } from "unist-util-visit";
import sizeOf from "image-size";
import { Element } from "hast";
import path from "path";
import fs from "fs";

export default function rehypeImgSize() {
  return (tree: Element) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "img" && node.properties && typeof node.properties.src === "string") {
        const src = node.properties.src;
        if (src.startsWith("/")) {
          const imagePath = path.join(process.cwd(), "public", src);
          try {
            if (fs.existsSync(imagePath)) {
              const buffer = fs.readFileSync(imagePath);
              const dimensions = sizeOf(buffer);
              node.properties.width = dimensions.width;
              node.properties.height = dimensions.height;
            }
          } catch (e) {
            console.error(`Error getting image size for ${imagePath}`, e);
          }
        }
      }
    });
  };
} 