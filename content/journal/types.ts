import type { C4DiagramKey } from "@/content/c4/diagrams";
import type { JournalChartKey } from "@/content/charts/journalCharts";
import type { OntologyEntityKey } from "@/content/ontology/entities";
import type { ImageReference } from "@/types/images";
import type { PageSlug } from "@/types/navigation";

export const journalRecordStatuses = ["published", "draft", "archived"] as const;
export const journalRecordTypes = [
  "Architecture Note",
  "Engineering Record",
  "Field Report",
  "Validation Report",
  "Measurement Note",
  "Design Revision",
] as const;
export const journalSchemaTypes = ["Article", "TechArticle", "Dataset"] as const;

export type JournalRecordStatus = (typeof journalRecordStatuses)[number];
export type JournalRecordType = (typeof journalRecordTypes)[number];
export type JournalSchemaType = (typeof journalSchemaTypes)[number];

export interface JournalRecordSection {
  id: string;
  title: string;
  summary?: string;
  body: string[];
}

export interface GoogleCnlEntity {
  name: string;
  type: string;
  salience?: number;
  metadata?: Record<string, string>;
}

export interface GoogleCnlEnrichment {
  status: "not-enriched" | "enriched";
  language?: string;
  entities?: GoogleCnlEntity[];
  notes?: string;
}

export interface EngineeringJournalRecord {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  status: JournalRecordStatus;
  recordType: JournalRecordType;
  schemaType: JournalSchemaType;
  summary: string;
  sections: JournalRecordSection[];
  entities: OntologyEntityKey[];
  tags: string[];
  relatedPages: PageSlug[];
  relatedRecords: string[];
  c4Diagrams: C4DiagramKey[];
  charts: JournalChartKey[];
  images: ImageReference[];
  /*
   * Google Cloud Natural Language enrichment is intentionally offline-only.
   * Entity extraction should be run before commit and stored here as static data.
   * The website must never call Google CNL at runtime.
   */
  googleCnl?: GoogleCnlEnrichment;
}
