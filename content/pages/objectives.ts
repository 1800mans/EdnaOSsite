import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const objectivesPage = {
  slug: "objectives",
  path: "/objectives",
  purpose:
    "Define the operating problems EDNA OS is built to measure, understand and improve.",
  primaryQuestion: "Why build an Orchard Operating System?",
  metadata: pageMetadata.objectives,
  hero: {
    title: "Technology is not the objective.",
    subtitle: "Better orchard performance is.",
    description:
      "Technology exists to replace uncertainty with measured operating evidence in commercial orchards.",
    image: Images.pages.objectives.hero,
    supportingText: "Technology exists to improve orchard performance.",
  },
  sections: [
    {
      id: "technology-is-not-the-objective",
      title: "Technology Is Not The Objective",
      summary:
        "Technology exists to solve operational problems in commercial orchards. EDNA OS is evaluated by orchard performance and decision quality, not by the presence of software.",
    },
    {
      id: "engineering-objectives-overview",
      title: "Engineering Objectives Overview",
      summary:
        "The objectives define the operational outcomes EDNA OS is designed to measure, influence and validate over time. Improving information quality is itself an operating objective because water, fertilizer and timing decisions depend on what the system can prove.",
    },
    {
      id: "reduce-water-consumption",
      title: "Reduce Water Consumption",
      summary:
        "Water use is evaluated through controlled irrigation decisions, measured field outcomes and evidence from prior cycles.",
    },
    {
      id: "reduce-fertilizer-losses",
      title: "Reduce Fertilizer Losses",
      summary:
        "Fertilizer decisions are evaluated against runoff, drainage, root-zone response and what the tree environment actually retained.",
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
        "Operating cost decisions are evaluated through infrastructure behavior, resource use, information quality and field validation.",
    },
  ],
  relatedPages: relatedPages.objectives,
  primaryCTA: {
    label: "Explore Operating Loop",
    href: "/operating-loop",
  },
} satisfies ContentPage;
