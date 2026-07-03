import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const fieldValidationPage = {
  slug: "fieldValidation",
  path: "/field-validation",
  purpose:
    "Demonstrate where EDNA OS is engineered and validated under real commercial orchard conditions.",
  primaryQuestion: "Where is EDNA OS being validated?",
  metadata: pageMetadata.fieldValidation,
  hero: {
    title: "Field Validation",
    subtitle:
      "Engineering decisions are validated under real commercial orchard conditions before becoming part of EDNA OS.",
    description:
      "EDNA OS is developed under the operational constraints of a commercial durian orchard in Calinan, Davao City, Philippines.",
    image: Images.pages.fieldValidation.hero,
  },
  sections: [
    {
      id: "pilot-orchard",
      title: "Pilot Orchard",
      summary:
        "The pilot orchard is a commercial durian orchard in Calinan, Davao City, Philippines. It is the engineering testbed where EDNA OS is operated, observed and refined.",
    },
    {
      id: "operational-constraints",
      title: "Operational Constraints",
      summary:
        "Limited water, electrical reliability, terrain, weather, commercial operation and maintenance requirements shaped the architecture. These constraints explain why EDNA OS evolved into a distributed engineering system.",
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      summary:
        "Field validation includes a pump station, reservoir, PLC cabinet, solar power, telemetry, lysimeters, Internet connectivity and power infrastructure. These systems provide the physical basis for engineering validation.",
    },
    {
      id: "engineering-validation",
      title: "Engineering Validation",
      summary:
        "Every engineering feature is validated in the field, including valve sequencing, pressure validation, telemetry, root-zone monitoring, operational evidence and safety logic. The field determines the architecture, not the opposite.",
    },
    {
      id: "current-status",
      title: "Current Status",
      summary:
        "EDNA OS remains an engineering project in active development. Field operation produces evidence, evidence informs engineering decisions and those decisions are validated again under orchard conditions.",
    },
  ],
  relatedPages: relatedPages.fieldValidation,
  primaryCTA: {
    label: "Explore Architecture",
    href: "/architecture",
  },
} satisfies ContentPage;
