import { siteConfig } from "@/config/site";
import type { PersonSchema, PersonSchemaInput } from "@/types/schema";

export function generatePersonSchema(input: PersonSchemaInput): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    url: new URL(input.url, siteConfig.url).toString(),
    image: input.image ? new URL(input.image, siteConfig.url).toString() : undefined,
    description: input.description,
  };
}
