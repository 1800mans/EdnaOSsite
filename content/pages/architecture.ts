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
    title: "Deterministic engineering for commercial orchards.",
    description:
      "EDNA OS is organized around field infrastructure, PLC control, edge telemetry, cloud records and decision logic.",
    image: Images.pages.architecture.hero,
  },
  sections: [
    { id: "field-infrastructure", title: "Field Infrastructure" },
    { id: "plc-layer", title: "PLC Layer" },
    { id: "edge-layer", title: "Edge Layer" },
    { id: "cloud-layer", title: "Cloud Layer" },
    { id: "decision-layer", title: "Decision Layer" },
    { id: "telemetry", title: "Telemetry" },
    { id: "fail-safe-logic", title: "Fail-safe Logic" },
  ],
  relatedPages: relatedPages.architecture,
  primaryCTA: {
    label: "Explore PLC Layer",
    href: "/architecture/plc-layer",
  },
} satisfies ContentPage;
