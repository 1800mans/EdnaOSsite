import { relatedPages } from "@/config/navigation";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const companyPage = {
  slug: "company",
  path: "/company",
  purpose: "Explain why EDNA exists. Not who owns it. Mission before biography.",
  primaryQuestion: "Who is building EDNA?",
  metadata: pageMetadata.company,
  hero: {
    title: "Built from operational realities by generational farmers.",
    description:
      "EDNA OS began as a practical engineering response to the operational challenges of managing a commercial orchard.",
    image: images.pages.company.hero,
  },
  sections: [
    { id: "mission", title: "Mission" },
    { id: "origin", title: "Origin" },
    { id: "commercial-orchard", title: "Commercial Orchard" },
    { id: "founder", title: "Founder" },
    { id: "engineering-philosophy", title: "Engineering Philosophy" },
    { id: "long-term-vision", title: "Long-term Vision" },
  ],
  relatedPages: relatedPages.company,
  primaryCTA: {
    label: "Contact",
    href: "/company",
  },
} satisfies ContentPage;
