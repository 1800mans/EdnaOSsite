import type { Metadata } from "next";

import { metadataDefaults } from "@/lib/metadata/defaults";
import { pageMetadata } from "@/lib/metadata/pages";
import type { PageMetadataDefinition, PageMetadataInput } from "@/types/metadata";

export { defaultKeywords, defaultRobotsPolicy, metadataDefaults } from "./defaults";
export { pageMetadata } from "./pages";

export function createRootMetadata(): Metadata {
  return createNextMetadata(pageMetadata.home);
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  return createNextMetadata({
    title: input.title.includes(metadataDefaults.siteName)
      ? input.title
      : `${input.title} | ${metadataDefaults.siteName}`,
    description: input.description,
    path: input.path,
    canonicalUrl: new URL(input.path, metadataDefaults.url).toString(),
    keywords: input.keywords,
    image: input.image ?? metadataDefaults.image,
    pageType: input.type === "article" ? "Engineering Article" : "Landing",
    language: metadataDefaults.language,
    author: metadataDefaults.author,
    publisher: metadataDefaults.publisher,
    robots: input.robots ?? metadataDefaults.robots,
  });
}

export function createNextMetadata(metadata: PageMetadataDefinition): Metadata {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    metadataBase: new URL(metadataDefaults.url),
    alternates: {
      canonical: metadata.canonicalUrl,
    },
    authors: [{ name: metadata.author }],
    creator: metadata.author,
    publisher: metadata.publisher,
    robots: metadata.robots,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonicalUrl,
      siteName: metadataDefaults.siteName,
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: metadata.language.replace("-", "_"),
      type: metadata.pageType === "Journal Entry" ? "article" : "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image],
    },
  };
}
