import { siteConfig } from "@/config/site";
import type { ArticleSchema, ArticleSchemaInput } from "@/types/schema";

export function generateArticleSchema(input: ArticleSchemaInput): ArticleSchema {
  const headline = input.headline ?? input.metadata.title;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
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
    articleSection: input.articleSection,
    keywords: input.metadata.keywords,
    mainEntityOfPage: input.metadata.canonicalUrl,
  };
}
