import { siteConfig } from "@/config/site";
import { ontologyEntities } from "@/content/ontology/entities";
import type { EngineeringJournalRecord } from "@/content/journal";
import type { PageMetadataDefinition } from "@/types/metadata";

interface ThingSchema {
  "@type": "Thing";
  name: string;
  description: string;
  sameAs?: string[];
}

interface JournalRecordSchemaInput {
  record: EngineeringJournalRecord;
  metadata: PageMetadataDefinition;
}

type JournalRecordSchema = Record<string, unknown>;

export function generateJournalRecordSchema({
  record,
  metadata,
}: JournalRecordSchemaInput): JournalRecordSchema {
  if (record.schemaType === "Dataset") {
    return generateDatasetSchema(record, metadata);
  }

  return generateArticleLikeSchema(record, metadata);
}

function generateArticleLikeSchema(
  record: EngineeringJournalRecord,
  metadata: PageMetadataDefinition,
): JournalRecordSchema {
  return {
    "@context": "https://schema.org",
    "@type": record.schemaType,
    headline: record.title,
    description: record.description,
    datePublished: record.datePublished,
    dateModified: record.dateModified,
    author: {
      "@type": "Organization",
      name: metadata.author,
    },
    publisher: {
      "@type": "Organization",
      name: metadata.publisher,
    },
    about: createAboutThings(record),
    keywords: record.tags,
    image: record.images[0]
      ? new URL(record.images[0].src, siteConfig.url).toString()
      : undefined,
    articleSection: record.recordType,
    mainEntityOfPage: metadata.canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

function generateDatasetSchema(
  record: EngineeringJournalRecord,
  metadata: PageMetadataDefinition,
): JournalRecordSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: record.title,
    description: record.description,
    datePublished: record.datePublished,
    dateModified: record.dateModified,
    creator: {
      "@type": "Organization",
      name: metadata.author,
    },
    publisher: {
      "@type": "Organization",
      name: metadata.publisher,
    },
    about: createAboutThings(record),
    keywords: record.tags,
    url: metadata.canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

function createAboutThings(record: EngineeringJournalRecord): ThingSchema[] {
  return record.entities.map((entityKey) => {
    const entity = ontologyEntities[entityKey];
    const sameAs =
      "sameAs" in entity && Array.isArray(entity.sameAs) ? entity.sameAs : undefined;

    return {
      "@type": "Thing",
      name: entity.name,
      description: entity.description,
      sameAs,
    };
  });
}
