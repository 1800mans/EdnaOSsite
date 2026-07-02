import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const journalPage = {
  slug: "journal",
  path: "/journal",
  purpose: "Document progress.",
  primaryQuestion: "What is currently being developed?",
  metadata: pageMetadata.journal,
  hero: {
    title: "Engineering never finishes.",
    subtitle: "It evolves.",
    description:
      "The Engineering Journal documents validation reports, engineering notes, field testing, lessons learned and design revisions.",
    image: Images.pages.journal.hero,
  },
  sections: [
    { id: "validation-reports", title: "Validation Reports" },
    { id: "engineering-notes", title: "Engineering Notes" },
    { id: "field-testing", title: "Field Testing" },
    { id: "lessons-learned", title: "Lessons Learned" },
    { id: "design-revisions", title: "Design Revisions" },
    { id: "version-history", title: "Version History" },
  ],
  relatedPages: relatedPages.journal,
  primaryCTA: {
    label: "Latest Entry",
    href: "/journal",
  },
} satisfies ContentPage;
