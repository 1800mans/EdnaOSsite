import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const homePage = {
  slug: "home",
  path: "/",
  purpose: "Introduce EDNA OS. Define Orchard Operating System. Create curiosity.",
  primaryQuestion: "What is EDNA OS?",
  metadata: pageMetadata.home,
  hero: {
    eyebrow: "Engineering Project",
    title: "EDNA OS",
    subtitle: "Defining the Orchard Operating System",
    description:
      "Modern commercial orchards require more than irrigation. They require coordinated control of infrastructure, resources and operational knowledge.",
    image: Images.pages.home.hero,
    supportingText:
      "Field operation produces evidence. Evidence improves future decision logic.",
  },
  sections: [
    {
      id: "engineering-manifesto",
      title: "Engineering Manifesto",
      summary:
        "Engineering precedes software. Architecture precedes implementation. Measurement precedes optimization. The first resource EDNA OS optimizes is information. Water and nutrients follow.",
    },
    {
      id: "why-commercial-orchards-need-more",
      title: "Why Commercial Orchards Need More",
      summary:
        "Modern commercial orchards require coordinated control of infrastructure, resources and operational knowledge before resource decisions can be improved with confidence.",
    },
    {
      id: "what-is-orchard-operating-system",
      title: "What Is Orchard Operating System?",
      summary:
        "An Orchard Operating System coordinates deterministic control, field infrastructure, resource decisions and operational evidence.",
    },
    {
      id: "engineering-objectives",
      title: "Engineering Objectives Preview",
      summary:
        "Technology is not the objective. Better orchard performance starts with better operational understanding.",
    },
    {
      id: "operating-loop-preview",
      title: "Operating Loop Preview",
      summary:
        "Each irrigation cycle creates field evidence that improves the next operating decision.",
    },
    {
      id: "measuring-outcomes-preview",
      title: "Measuring Outcomes Preview",
      summary: "Most systems measure inputs. EDNA measures what trees actually receive.",
    },
    {
      id: "architecture-preview",
      title: "Architecture Preview",
      summary:
        "EDNA OS is organized around field infrastructure, PLC control, edge telemetry, cloud records and decision logic.",
    },
    {
      id: "field-validation-preview",
      title: "Field Validation Preview",
      summary:
        "EDNA OS is built on a commercial orchard and validated through field operation.",
    },
    {
      id: "engineering-journal-preview",
      title: "Engineering Journal Preview",
      summary:
        "Engineering never finishes. It evolves through validation reports, field testing, lessons learned and design revisions.",
    },
    {
      id: "about-preview",
      title: "About Preview",
      summary:
        "EDNA OS began as a practical engineering response to the operational challenges of managing a commercial orchard.",
    },
  ],
  relatedPages: relatedPages.home,
  primaryCTA: {
    label: "Explore Architecture",
    href: "/architecture",
  },
  secondaryCTA: {
    label: "Learn About Orchard Operating System",
    href: "/objectives",
  },
} satisfies ContentPage;
