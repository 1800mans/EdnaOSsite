import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const operatingLoopPage = {
  slug: "operatingLoop",
  path: "/operating-loop",
  purpose: "Explain how EDNA learns.",
  primaryQuestion: "How does the system improve?",
  metadata: pageMetadata.operatingLoop,
  hero: {
    title: "Every irrigation cycle is a controlled experiment.",
    subtitle:
      "EDNA OS continuously observes, operates, measures and improves irrigation decisions through evidence collected during real orchard operation.",
    description:
      "The Operating Loop explains how orchard operations become measurable engineering experiments rather than isolated irrigation events.",
    image: Images.pages.operatingLoop.hero,
    supportingText:
      "Objectives define what must improve. Measuring Outcomes shows what trees receive. Architecture makes the loop reliable. Operational evidence connects them.",
  },
  sections: [
    {
      id: "observe",
      title: "Observe",
      summary:
        "Every irrigation cycle begins with observation. Weather, soil moisture, tank levels, previous irrigation, tree condition and existing field evidence define the initial operating conditions.",
    },
    {
      id: "operate",
      title: "Operate",
      summary:
        "The PLC executes deterministic irrigation through pump sequencing, valve sequencing, safety checks, pressure verification and fail-safe operation. Operation follows engineering rules rather than assumptions.",
    },
    {
      id: "measure",
      title: "Measure",
      summary:
        "The cycle does not end when water stops flowing. EDNA measures drainage, runoff EC, root-zone response, water balance, flow, pressure and tree response through the Measuring Outcomes system.",
    },
    {
      id: "record",
      title: "Record",
      summary:
        "Operational evidence is permanently recorded through telemetry, historical records, engineering observations and multi-season comparison, turning routine operation into a durable knowledge base.",
    },
    {
      id: "learn",
      title: "Learn",
      summary:
        "Engineering decisions improve when operational evidence is reviewed against field response. The emphasis is pattern recognition, validation and continuous refinement, not artificial intelligence claims.",
    },
    {
      id: "improve",
      title: "Improve",
      summary:
        "Every completed irrigation cycle informs the next one. The loop connects back to the engineering objectives: better use of water and fertilizer, reduced erosion, healthier root systems, better fruit quality and more consistent production.",
    },
    {
      id: "operating-philosophy",
      title: "Operating Philosophy",
      summary:
        "Understand before acting. Measure before optimizing. Validate before scaling. EDNA OS improves irrigation and fertigation by improving the quality of operational knowledge first.",
    },
  ],
  relatedPages: relatedPages.operatingLoop,
  primaryCTA: {
    label: "Measuring Outcomes",
    href: "/measuring-outcomes",
  },
} satisfies ContentPage;
