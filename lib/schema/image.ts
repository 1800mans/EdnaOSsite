import { siteConfig } from "@/config/site";
import type { ImageReference } from "@/types/images";
import type { ImageObjectSchema } from "@/types/schema";

export function generateImageSchema(image: ImageReference): ImageObjectSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: new URL(image.src, siteConfig.url).toString(),
    caption: image.title ?? image.alt,
    description: image.description ?? image.alt,
    creator: siteConfig.publisher,
    copyrightNotice: siteConfig.publisher,
  };
}
