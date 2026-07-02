import { siteConfig } from "@/config/site";
import type { TechArticleSchema, TechArticleSchemaInput } from "@/types/schema";

export function generateTechArticleSchema(
  input: TechArticleSchemaInput,
): TechArticleSchema {
  const headline = input.headline ?? input.metadata.title;

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline,
    description: input.metadata.description,
    author: {
      "@type": "Organization",
      name: input.metadata.author,
    },
    publisher: {
      "@type": "Organization",
      name: input.metadata.publisher,
    },
    datePublished: input.metadata.publishedDate,
    dateModified: input.metadata.modifiedDate,
    image: new URL(input.metadata.image, siteConfig.url).toString(),
    keywords: input.metadata.keywords,
    mainEntityOfPage: input.metadata.canonicalUrl,
  };
}
