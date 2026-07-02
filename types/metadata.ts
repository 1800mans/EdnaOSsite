export interface RobotsPolicy {
  index: boolean;
  follow: boolean;
}

export type PageMetadataType =
  | "Home"
  | "Landing"
  | "Documentation"
  | "Engineering Article"
  | "Journal Entry"
  | "Research Paper"
  | "Architecture"
  | "Deployment"
  | "Reference"
  | "Company";

export interface PageMetadataDefinition {
  title: string;
  description: string;
  path: string;
  canonicalUrl: string;
  keywords: string[];
  image: string;
  pageType: PageMetadataType;
  language: string;
  author: string;
  publisher: string;
  robots: RobotsPolicy;
  modifiedDate?: string;
  publishedDate?: string;
}

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  image?: string;
  type?: "website" | "article";
  robots?: RobotsPolicy;
}
