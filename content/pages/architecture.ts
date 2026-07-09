import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const architecturePage = {
  slug: "architecture",
  path: "/architecture",
  purpose:
    "Explain how EDNA is engineered. Engineering decisions first. Technology second.",
  primaryQuestion: "How is EDNA built?",
  metadata: pageMetadata.architecture,
  hero: {
    title: "Engineering Architecture",
    subtitle: "A commercial orchard is a distributed physical system.",
    description:
      "Reliable operation requires a distributed engineering architecture rather than a collection of disconnected devices.",
    image: Images.pages.architecture.hero,
  },
  sections: [
    {
      id: "engineering-problem",
      title: "Engineering Problem",
      summary:
        "A commercial orchard contains pumps, valves, pipelines, sensors, telemetry and software operating across a large physical area. The architecture exists to coordinate these independent systems into one deterministic operating environment.",
    },
    {
      id: "why-distributed-architecture",
      title: "Why Distributed Architecture",
      summary:
        "One computer is not enough for a physical system spread across distance, electrical boundaries and changing field conditions. Reliability, communication, safety, maintainability and graceful degradation require responsibilities to be distributed deliberately.",
    },
    {
      id: "plc-layer",
      title: "PLC Layer",
      summary:
        "Deterministic control belongs inside an industrial PLC because pump protection, valve sequencing, timing and safety must continue without Internet access. The PLC is the correct engineering tool for predictable field operation.",
    },
    {
      id: "edge-layer",
      title: "Edge Layer",
      summary:
        "Operational intelligence belongs outside the PLC. The edge layer handles scheduling, weather context, telemetry, data collection and local decision support while complementing the PLC instead of replacing it.",
    },
    {
      id: "cloud-layer",
      title: "Cloud Layer",
      summary:
        "Long-term storage exists to preserve historical records, operational evidence, multi-season analysis, remote access and reporting. Cloud records support engineering review without becoming part of the immediate safety loop.",
    },
    {
      id: "decision-layer",
      title: "Decision Layer",
      summary:
        "Engineering decisions improve when operational evidence is compared with root-zone response and outcome measurement. This layer turns recorded information into revised irrigation and fertigation logic, connecting Measuring Outcomes to Architecture through continuous improvement.",
    },
    {
      id: "fail-safe-engineering",
      title: "Fail-safe Engineering",
      summary:
        "Graceful degradation is part of the architecture. The PLC can continue operating without cloud access, edge failure does not stop irrigation, network failure does not stop pumps, manual override remains available and safety always has priority.",
    },
  ],
  relatedPages: relatedPages.architecture,
  primaryCTA: {
    label: "Explore Field Validation",
    href: "/field-validation",
  },
} satisfies ContentPage;
