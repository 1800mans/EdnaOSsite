import { relatedPages } from "@/config/navigation";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const measuringOutcomesPage = {
  slug: "measuringOutcomes",
  path: "/measuring-outcomes",
  purpose:
    "Introduce EDNA's strongest differentiator. Most systems measure inputs. EDNA measures outcomes.",
  primaryQuestion: "What makes EDNA different?",
  metadata: pageMetadata.measuringOutcomes,
  hero: {
    title: "Most systems measure inputs.",
    subtitle: "EDNA measures what trees actually receive.",
    description:
      "EDNA measures root zone response, runoff and operational evidence instead of simply measuring irrigation inputs.",
    image: images.pages.measuringOutcomes.hero,
  },
  sections: [
    { id: "input-vs-outcome", title: "Input vs Outcome" },
    { id: "root-zone", title: "Root Zone" },
    { id: "drainage", title: "Drainage" },
    { id: "runoff-ec", title: "Runoff EC" },
    { id: "water-balance", title: "Water Balance" },
    { id: "tree-response", title: "Tree Response" },
    { id: "operational-evidence", title: "Operational Evidence" },
  ],
  relatedPages: relatedPages.measuringOutcomes,
  primaryCTA: {
    label: "Explore Lysimeter System",
    href: "/measuring-outcomes/lysimeter-system",
  },
} satisfies ContentPage;
