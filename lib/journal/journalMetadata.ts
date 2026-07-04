import { metadataDefaults } from "@/lib/metadata";
import type { EngineeringJournalRecord } from "@/content/journal";
import type { PageMetadataDefinition } from "@/types/metadata";

export function createJournalRecordMetadata(
  record: EngineeringJournalRecord,
): PageMetadataDefinition {
  const path = `/journal/${record.slug}`;

  return {
    title: `${record.title} | EDNA OS`,
    description: record.description,
    path,
    canonicalUrl: new URL(path, metadataDefaults.url).toString(),
    keywords: record.tags,
    image: record.images[0]?.src ?? metadataDefaults.image,
    pageType: record.schemaType === "Article" ? "Journal Entry" : "Engineering Article",
    language: metadataDefaults.language,
    author: metadataDefaults.author,
    publisher: metadataDefaults.publisher,
    robots: metadataDefaults.robots,
    publishedDate: record.datePublished,
    modifiedDate: record.dateModified,
  };
}
