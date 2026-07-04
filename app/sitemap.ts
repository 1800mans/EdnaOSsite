import type { MetadataRoute } from "next";

import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getPublishedJournalRecords } from "@/lib/journal/getJournalRecords";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pageEntries = mainNavigation.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const journalEntries = getPublishedJournalRecords().map((record) => ({
    url: new URL(`/journal/${record.slug}`, siteConfig.url).toString(),
    lastModified: new Date(`${record.dateModified}T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pageEntries, ...journalEntries];
}
