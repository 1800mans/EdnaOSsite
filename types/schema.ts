import type { ImageReference } from "@/types/images";
import type { PageMetadataDefinition } from "@/types/metadata";

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    email?: string;
  };
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: {
    "@type": "Organization";
    name: string;
  };
  inLanguage: string;
}

export interface WebPageSchemaInput {
  name: string;
  path: string;
  description: string;
  image?: ImageReference;
  breadcrumb?: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface WebPageSchema {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  url: string;
  description: string;
  primaryImageOfPage?: ImageObjectSchema;
  breadcrumb?: BreadcrumbListSchema;
  isPartOf: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
  inLanguage: string;
}

export interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ArticleSchemaInput {
  metadata: PageMetadataDefinition;
  headline?: string;
  articleSection?: string;
}

export interface TechArticleSchemaInput {
  metadata: PageMetadataDefinition;
  headline?: string;
}

export interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  author: {
    "@type": "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
  };
  datePublished?: string;
  dateModified?: string;
  image: string;
  articleSection?: string;
  keywords: string[];
  mainEntityOfPage: string;
}

export interface TechArticleSchema {
  "@context": "https://schema.org";
  "@type": "TechArticle";
  headline: string;
  description: string;
  author: {
    "@type": "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
  };
  datePublished?: string;
  dateModified?: string;
  image: string;
  keywords: string[];
  mainEntityOfPage: string;
}

export interface PersonSchemaInput {
  name: string;
  jobTitle: string;
  url: string;
  image?: string;
  description: string;
}

export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle: string;
  worksFor: {
    "@type": "Organization";
    name: string;
  };
  url: string;
  image?: string;
  description: string;
}

export interface ImageObjectSchema {
  "@context": "https://schema.org";
  "@type": "ImageObject";
  contentUrl: string;
  caption: string;
  description: string;
  creator?: string;
  copyrightNotice?: string;
}
