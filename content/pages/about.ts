import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ImageReference } from "@/types/images";
import type { ContentPage } from "@/types/page";

interface AboutFounder {
  name: string;
  jobTitle: string;
  image: ImageReference;
}

export const aboutFounder = {
  name: "EDNA OS Founder",
  jobTitle: "Founder",
  image: Images.pages.about.founder,
} satisfies AboutFounder;

export const aboutPage = {
  slug: "about",
  path: "/about",
  purpose:
    "Explain why EDNA OS exists, who is building it and how to contact the project.",
  primaryQuestion: "Why does EDNA OS exist?",
  metadata: pageMetadata.about,
  hero: {
    title: "Built from operational realities by generational farmers.",
    subtitle:
      "EDNA OS began as a practical engineering response to the challenges of managing a commercial orchard.",
    description:
      "The project continues to evolve through field validation, deterministic engineering and operational knowledge.",
    image: Images.pages.about.hero,
  },
  sections: [
    {
      id: "project-origin",
      title: "Project Origin",
      summary:
        "Commercial orchards continue to rely on fragmented infrastructure and disconnected operational knowledge. EDNA OS began as an engineering effort to build a deterministic operating environment rather than another irrigation controller. Technology serves measured orchard operation.",
    },
    {
      id: "why-edna-exists",
      title: "Engineering Philosophy",
      summary:
        "The first resource EDNA OS optimizes is information. Water and nutrients follow. Water and fertilizer remain essential orchard resources, but better operational knowledge allows those resources to be used with more precision. Better decisions come from measured evidence, so every irrigation cycle becomes an engineering experiment and every season expands what the orchard operation knows about itself.",
    },
    {
      id: "about-the-founder",
      title: "About the Founder",
      summary:
        "The founder studied Radiophysics at Belarus State University after graduating from the Belarus State University Lyceum. His studies were interrupted after leaving the country, leading him toward entrepreneurship, engineering and software development through practical experience rather than a traditional academic path.\n\nYears later, while developing and operating a commercial durian orchard, he encountered the limitations of existing irrigation and orchard management systems. Rather than adapting the orchard to available tools, he began engineering a system around its operational realities.\n\nThe project initially started as a simple mini PC with GPIO control and ESP32-based field devices. As engineering requirements evolved and new milestones were reached, the architecture gradually developed into a far more robust distributed system built around PLC control, edge computing, telemetry and field evidence.\n\nWhat began as a practical solution for a single commercial orchard has evolved into a broader engineering effort to define a new category: the Orchard Operating System.",
    },
    {
      id: "development-locations",
      title: "Development Locations",
      summary:
        "Software development and field validation occur in different locations. Engineering development is based in Daytona Beach, Florida, USA. The pilot orchard is in Calinan, Davao City, Philippines.",
    },
    {
      id: "contact",
      title: "Contact",
      summary:
        "Project contact is handled directly by email. Future public references may include GitHub and LinkedIn.",
    },
  ],
  relatedPages: relatedPages.about,
  primaryCTA: {
    label: "info@ednaos.com",
    href: "mailto:info@ednaos.com",
  },
} satisfies ContentPage;
