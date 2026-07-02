import { siteConfig } from "@/config/site";
import type { WebSiteSchema } from "@/types/schema";

export function generateWebsiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.publisher,
    },
    inLanguage: siteConfig.language,
  };
}
