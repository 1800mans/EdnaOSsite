import { journalRecords } from "@/content/journal";
import type { EngineeringJournalRecord } from "@/content/journal";

export function getJournalRecords(): EngineeringJournalRecord[] {
  return [...journalRecords];
}

export function getPublishedJournalRecords(): EngineeringJournalRecord[] {
  return getJournalRecords()
    .filter((record) => record.status === "published")
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export function getJournalRecordBySlug(
  slug: string,
): EngineeringJournalRecord | undefined {
  return getJournalRecords().find((record) => record.slug === slug);
}

export function getPublishedJournalRecordBySlug(
  slug: string,
): EngineeringJournalRecord | undefined {
  const record = getJournalRecordBySlug(slug);

  if (record?.status !== "published") {
    return undefined;
  }

  return record;
}

export function getRelatedJournalRecords(
  record: EngineeringJournalRecord,
): EngineeringJournalRecord[] {
  return record.relatedRecords
    .map((slug) => getPublishedJournalRecordBySlug(slug))
    .filter((relatedRecord): relatedRecord is EngineeringJournalRecord =>
      Boolean(relatedRecord),
    );
}
