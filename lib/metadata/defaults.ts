import { siteConfig } from "@/config/site";
import { Images } from "@/lib/images";
import type { PageMetadataDefinition, RobotsPolicy } from "@/types/metadata";

export const defaultRobotsPolicy: RobotsPolicy = {
  index: true,
  follow: true,
};

export const defaultKeywords = [
  "Orchard Operating System",
  "Commercial Orchard",
  "Deterministic Control",
  "Operational Evidence",
  "Industrial Agriculture",
];

export const metadataDefaults = {
  siteName: siteConfig.name,
  siteTitle: siteConfig.title,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  url: siteConfig.url,
  language: siteConfig.language,
  author: siteConfig.author,
  publisher: siteConfig.publisher,
  image: Images.logos.og.src,
  robots: defaultRobotsPolicy,
  keywords: defaultKeywords,
} satisfies Pick<
  PageMetadataDefinition,
  "language" | "author" | "publisher" | "image" | "robots" | "keywords"
> & {
  siteName: string;
  siteTitle: string;
  tagline: string;
  description: string;
  url: string;
};
