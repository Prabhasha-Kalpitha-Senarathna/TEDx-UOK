export type BlockType = "paragraph" | "heading" | "image" | "quote" | "divider";

export interface Block {
  id: string;
  type: BlockType;
  content: string; // text content for paragraph/heading/quote
  level?: 2 | 3; // for headings: h2 or h3
  imageUrl?: string; // for image blocks
  caption?: string; // for image captions
  align?: "left" | "center" | "right"; // for image positioning
  textAlign?: "left" | "center" | "right"; // for text alignment
  fontFamily?: string; // for font family override
  spacingSize?: "sm" | "md" | "lg"; // for divider vertical spacing
}

const DIVIDER_SPACING = { sm: "1.5rem", md: "3rem", lg: "5rem" };

function buildTextStyle(block: Block): string {
  const parts: string[] = [];
  if (block.textAlign) parts.push(`text-align:${block.textAlign}`);
  if (block.fontFamily) parts.push(`font-family:${block.fontFamily}`);
  return parts.length ? ` style="${parts.join(";")}"` : "";
}

// Converts blocks array to HTML string for the existing blog page
export function blocksToHtml(blocks: Block[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p${buildTextStyle(block)}>${block.content}</p>`;
        case "heading":
          return `<h${block.level ?? 2}${buildTextStyle(block)}>${block.content}</h${block.level ?? 2}>`;
        case "quote":
          return `<blockquote${buildTextStyle(block)}><p>${block.content}</p></blockquote>`;
        case "image":
          return `
            <figure class="blog-image align-${block.align ?? "center"}">
              <img src="${block.imageUrl}" alt="${block.caption ?? ""}" />
              ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
            </figure>`;
        case "divider": {
          const spacing = DIVIDER_SPACING[block.spacingSize ?? "md"];
          return `<hr style="margin:${spacing} 0;border:none;border-top:1px solid rgba(255,255,255,0.15);" />`;
        }
        default:
          return "";
      }
    })
    .join("\n");
}
