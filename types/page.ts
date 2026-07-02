import type { ImageReference } from "@/types/images";
import type { PageMetadataDefinition } from "@/types/metadata";
import type { PageSlug } from "@/types/navigation";

export interface BasePageContent {
  title: string;
  description: string;
  heroImage: ImageReference;
}

export interface CTA {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description: string;
  image: ImageReference;
  supportingText?: string;
}

export interface PageSection {
  id: string;
  title: string;
  summary?: string;
}

export interface ContentPage {
  slug: PageSlug;
  path: string;
  purpose: string;
  primaryQuestion: string;
  metadata: PageMetadataDefinition;
  hero: HeroContent;
  sections: PageSection[];
  relatedPages: PageSlug[];
  primaryCTA: CTA;
  secondaryCTA?: CTA;
}
