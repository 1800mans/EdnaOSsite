import { siteConfig } from "@/config/site";

export function createCanonicalUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
