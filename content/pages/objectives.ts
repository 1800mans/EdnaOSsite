import { relatedPages } from "@/config/navigation";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const objectivesPage = {
  slug: "objectives",
  path: "/objectives",
  purpose: "Explain why EDNA exists. Technology exists to solve operational problems.",
  primaryQuestion: "Why build an Orchard Operating System?",
  metadata: pageMetadata.objectives,
  hero: {
    title: "Technology is not the objective.",
    subtitle: "Better orchard performance is.",
    description:
      "Technology exists to solve operational problems in commercial orchards.",
    image: images.pages.objectives.hero,
  },
  sections: [
    { id: "reduce-water-consumption", title: "Reduce Water Consumption" },
    { id: "reduce-fertilizer-losses", title: "Reduce Fertilizer Losses" },
    { id: "reduce-soil-erosion", title: "Reduce Soil Erosion" },
    { id: "improve-root-health", title: "Improve Root Health" },
    { id: "increase-export-quality", title: "Increase Export Quality" },
    {
      id: "improve-production-consistency",
      title: "Improve Production Consistency",
    },
    { id: "lower-operating-costs", title: "Lower Operating Costs" },
  ],
  relatedPages: relatedPages.objectives,
  primaryCTA: {
    label: "Explore Operating Loop",
    href: "/operating-loop",
  },
} satisfies ContentPage;
