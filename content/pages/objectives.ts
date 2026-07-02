import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
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
    image: Images.pages.objectives.hero,
    supportingText: "Technology exists to improve orchard performance.",
  },
  sections: [
    {
      id: "technology-is-not-the-objective",
      title: "Technology Is Not The Objective",
      summary:
        "Technology exists to solve operational problems in commercial orchards. EDNA OS is evaluated by orchard performance, not by the presence of software.",
    },
    {
      id: "engineering-objectives-overview",
      title: "Engineering Objectives Overview",
      summary:
        "The objectives define the operational outcomes EDNA OS is designed to measure, influence and validate over time.",
    },
    {
      id: "reduce-water-consumption",
      title: "Reduce Water Consumption",
      summary:
        "Water use is evaluated through controlled irrigation decisions and measured field outcomes.",
    },
    {
      id: "reduce-fertilizer-losses",
      title: "Reduce Fertilizer Losses",
      summary:
        "Fertilizer decisions are evaluated against runoff, drainage and root zone response.",
    },
    {
      id: "reduce-soil-erosion",
      title: "Reduce Soil Erosion",
      summary:
        "Runoff control and irrigation sequencing are treated as engineering constraints.",
    },
    {
      id: "improve-root-zone-health",
      title: "Improve Root Zone Health",
      summary:
        "Root zone conditions are measured to understand what trees actually receive.",
    },
    {
      id: "increase-export-quality",
      title: "Increase Export Quality",
      summary:
        "Export quality is treated as an operational outcome influenced by water, nutrition and consistency.",
    },
    {
      id: "improve-production-consistency",
      title: "Improve Production Consistency",
      summary:
        "Production consistency depends on repeatable infrastructure behavior and recorded operational evidence.",
    },
    {
      id: "lower-operating-costs",
      title: "Lower Operating Costs",
      summary:
        "Operating cost decisions are evaluated through infrastructure, resource use and field validation.",
    },
  ],
  relatedPages: relatedPages.objectives,
  primaryCTA: {
    label: "Explore Operating Loop",
    href: "/operating-loop",
  },
} satisfies ContentPage;
