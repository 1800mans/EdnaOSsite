import { relatedPages } from "@/config/navigation";
import { images } from "@/lib/images";
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
    image: images.pages.home.hero,
  },
  sections: [
    { id: "engineering-manifesto", title: "Engineering Manifesto" },
    {
      id: "why-commercial-orchards-need-more",
      title: "Why Commercial Orchards Need More",
    },
    {
      id: "what-is-orchard-operating-system",
      title: "What Is Orchard Operating System?",
    },
    { id: "engineering-objectives", title: "Engineering Objectives" },
    { id: "operating-loop-preview", title: "Operating Loop Preview" },
    { id: "measuring-outcomes-preview", title: "Measuring Outcomes Preview" },
    { id: "architecture-preview", title: "Architecture Preview" },
    { id: "deployment-preview", title: "Deployment Preview" },
    { id: "engineering-journal-preview", title: "Engineering Journal Preview" },
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
