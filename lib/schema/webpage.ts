import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { generateImageSchema } from "@/lib/schema/image";
import type { WebPageSchema, WebPageSchemaInput } from "@/types/schema";

export function generateWebPageSchema(input: WebPageSchemaInput): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    url: new URL(input.path, siteConfig.url).toString(),
    description: input.description,
    primaryImageOfPage: input.image ? generateImageSchema(input.image) : undefined,
    breadcrumb: input.breadcrumb ? generateBreadcrumbSchema(input.breadcrumb) : undefined,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: siteConfig.language,
  };
}
