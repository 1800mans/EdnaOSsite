import { siteConfig } from "@/config/site";
import { Images } from "@/lib/images";
import type { OrganizationSchema } from "@/types/schema";

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: new URL(Images.logos.logo.src, siteConfig.url).toString(),
    description: siteConfig.description,
  };
}
