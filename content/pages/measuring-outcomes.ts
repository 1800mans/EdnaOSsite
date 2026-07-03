import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
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
      "Inline flow meters, EC sensors, pressure sensors, lysimeters and telemetry are used to understand field response rather than only record what was sent into the system.",
    image: Images.pages.measuringOutcomes.hero,
    supportingText:
      "The difference is not more data. The difference is measuring whether orchard infrastructure produced the intended outcome.",
  },
  sections: [
    {
      id: "input-vs-outcome",
      title: "Input vs Outcome",
      summary:
        "Conventional irrigation systems can record pump runtime, valve state or applied water volume. Those are inputs. EDNA OS is designed to connect those inputs with measured field response in the root zone.",
    },
    {
      id: "operational-evidence",
      title: "Operational Evidence",
      summary:
        "Operational evidence is created when inline flow meters, pressure sensors, EC sensors and telemetry records are evaluated against what happened in orchard soil after an irrigation or fertigation event.",
    },
    {
      id: "lysimeter-system",
      title: "Lysimeter System",
      summary:
        "The lysimeter is treated as agricultural field instrumentation: a buried cylindrical soil column with PVC drainage, sensor wiring and weatherproof instrumentation installed near orchard trees. It is not laboratory equipment.",
    },
    {
      id: "root-zone-monitoring",
      title: "Root Zone Monitoring",
      summary:
        "Root zone monitoring focuses on what trees actually receive. EC sensor lines, temperature probes, soil response and drainage behavior help explain whether water and nutrients remained available to the tree.",
    },
    {
      id: "why-this-matters",
      title: "Why This Matters",
      summary:
        "Measurement changes the engineering problem. Instead of assuming that applied irrigation reached the tree, EDNA OS records evidence from the field and uses that evidence to improve future decision logic.",
    },
  ],
  relatedPages: relatedPages.measuringOutcomes,
  primaryCTA: {
    label: "Explore Lysimeter System",
    href: "/measuring-outcomes/lysimeter-system",
  },
} satisfies ContentPage;
