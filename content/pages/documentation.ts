import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const documentationPage = {
  slug: "documentation",
  path: "/documentation",
  purpose: "Provide permanent engineering references.",
  primaryQuestion: "How is EDNA documented?",
  metadata: pageMetadata.documentation,
  hero: {
    title: "Engineering knowledge should be preserved.",
    description:
      "Documentation provides permanent engineering references covering architecture, hardware, software, deployment and engineering notes.",
    image: Images.pages.documentation.hero,
  },
  sections: [
    { id: "architecture", title: "Architecture" },
    { id: "hardware", title: "Hardware" },
    { id: "software", title: "Software" },
    { id: "deployment", title: "Deployment" },
    { id: "white-papers", title: "White Papers" },
    { id: "engineering-notes", title: "Engineering Notes" },
    { id: "reference-documents", title: "Reference Documents" },
  ],
  relatedPages: relatedPages.documentation,
  primaryCTA: {
    label: "Engineering Journal",
    href: "/journal",
  },
} satisfies ContentPage;
