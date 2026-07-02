export interface RobotsPolicy {
  index: boolean;
  follow: boolean;
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
