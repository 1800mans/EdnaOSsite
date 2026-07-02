import type { Metadata } from "next";

import { defaultKeywords, defaultRobotsPolicy } from "@/config/seo";
import { siteConfig } from "@/config/site";
import type { PageMetadataInput } from "@/types/metadata";

export function createRootMetadata(): Metadata {
  return createPageMetadata({
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "An engineering project documenting the creation of the Orchard Operating System through deterministic control and operational evidence.",
    path: "/",
    keywords: defaultKeywords,
  });
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(input.path, siteConfig.url).toString();
  const image = input.image ?? siteConfig.defaultOgImage;
  const title = input.title.includes(siteConfig.name)
    ? input.title
    : `${input.title} | ${siteConfig.name}`;

  return {
    title,
    description: input.description,
    keywords: input.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.publisher,
    robots: input.robots ?? defaultRobotsPolicy,
    openGraph: {
      title,
      description: input.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} engineering documentation image`,
        },
      ],
      locale: siteConfig.language.replace("-", "_"),
      type: input.type ?? "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: input.description,
      images: [image],
    },
  };
}
