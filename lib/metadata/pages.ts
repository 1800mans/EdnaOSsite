import { metadataDefaults } from "@/lib/metadata/defaults";
import { Images } from "@/lib/images";
import type { PageMetadataDefinition } from "@/types/metadata";
import type { PageSlug } from "@/types/navigation";

function definePageMetadata(
  metadata: Omit<
    PageMetadataDefinition,
    "canonicalUrl" | "language" | "author" | "publisher" | "robots"
  >,
): PageMetadataDefinition {
  return {
    ...metadata,
    canonicalUrl: new URL(metadata.path, metadataDefaults.url).toString(),
    language: metadataDefaults.language,
    author: metadataDefaults.author,
    publisher: metadataDefaults.publisher,
    robots: metadataDefaults.robots,
  };
}

export const pageMetadata = {
  home: definePageMetadata({
    title: "EDNA OS | Defining the Orchard Operating System",
    description:
      "An engineering project documenting the creation of the Orchard Operating System through deterministic control and operational evidence.",
    path: "/",
    keywords: metadataDefaults.keywords,
    image: Images.openGraph.home.src,
    pageType: "Home",
  }),
  objectives: definePageMetadata({
    title: "Engineering Objectives | EDNA OS",
    description:
      "Discover the operational engineering objectives guiding the development of EDNA OS.",
    path: "/objectives",
    keywords: [
      "Orchard Operating System",
      "Commercial Orchard",
      "Operational Engineering",
      "Water Consumption",
      "Fertilizer Losses",
    ],
    image: metadataDefaults.image,
    pageType: "Landing",
  }),
  operatingLoop: definePageMetadata({
    title: "Operating Loop | EDNA OS",
    description:
      "Learn how every irrigation cycle becomes operational evidence used to improve future engineering decisions.",
    path: "/operating-loop",
    keywords: [
      "Orchard Operating System",
      "Operational Evidence",
      "Decision Models",
      "Continuous Validation",
    ],
    image: metadataDefaults.image,
    pageType: "Landing",
  }),
  measuringOutcomes: definePageMetadata({
    title: "Measuring Outcomes | EDNA OS",
    description:
      "Explore how EDNA measures root zone response, runoff and operational evidence instead of simply measuring irrigation inputs.",
    path: "/measuring-outcomes",
    keywords: [
      "Orchard Operating System",
      "Lysimeter",
      "Root Zone Monitoring",
      "Water Balance",
      "Operational Evidence",
    ],
    image: metadataDefaults.image,
    pageType: "Landing",
  }),
  architecture: definePageMetadata({
    title: "Architecture | EDNA OS",
    description:
      "Explore the layered architecture of EDNA OS including PLC control, telemetry, decision logic and field infrastructure.",
    path: "/architecture",
    keywords: [
      "Orchard Operating System Architecture",
      "PLC Automation",
      "Telemetry",
      "Distributed Architecture",
      "Deterministic Control",
    ],
    image: Images.openGraph.architecture.src,
    pageType: "Architecture",
  }),
  deployment: definePageMetadata({
    title: "Deployment | EDNA OS",
    description:
      "See how EDNA OS is engineered and validated on a commercial durian orchard.",
    path: "/deployment",
    keywords: [
      "Commercial Durian Orchard",
      "Field Validation",
      "Deployment",
      "Telemetry",
      "Engineering Validation",
    ],
    image: Images.openGraph.deployment.src,
    pageType: "Deployment",
  }),
  documentation: definePageMetadata({
    title: "Engineering Documentation | EDNA OS",
    description:
      "Browse engineering documentation covering architecture, deployment, hardware and operational principles.",
    path: "/documentation",
    keywords: [
      "Engineering Documentation",
      "Orchard Operating System",
      "Hardware Documentation",
      "Deployment Guides",
      "White Papers",
    ],
    image: metadataDefaults.image,
    pageType: "Documentation",
  }),
  journal: definePageMetadata({
    title: "Engineering Journal | EDNA OS",
    description:
      "Follow the engineering progress, field validation and design evolution of EDNA OS.",
    path: "/journal",
    keywords: [
      "Engineering Journal",
      "Field Validation",
      "Engineering Notes",
      "Design Evolution",
      "Operational Evidence",
    ],
    image: Images.openGraph.journal.src,
    pageType: "Journal Entry",
  }),
  about: definePageMetadata({
    title: "About | EDNA OS",
    description:
      "Learn why EDNA OS exists, who is building it and how field validation guides the project.",
    path: "/about",
    keywords: [
      "EDNA OS",
      "Orchard Operating System",
      "Commercial Orchard",
      "Engineering Philosophy",
    ],
    image: Images.openGraph.about.src,
    pageType: "About",
  }),
} satisfies Record<PageSlug, PageMetadataDefinition>;
