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
      "The project continues to evolve through field validation, deterministic engineering and operational evidence.",
    image: Images.pages.about.hero,
  },
  sections: [
    {
      id: "project-origin",
      title: "Project Origin",
      summary:
        "Commercial orchards continue to rely on fragmented infrastructure and disconnected operational knowledge. EDNA OS began as an engineering effort to build a deterministic operating environment rather than another irrigation controller. Technology serves operational outcomes.",
    },
    {
      id: "why-edna-exists",
      title: "Why EDNA Exists",
      summary:
        "EDNA OS exists to connect field infrastructure, control logic and measured outcomes into a practical engineering system for commercial orchard operation.",
    },
    {
      id: "about-the-founder",
      title: "About the Founder",
      summary:
        "The founder studied Radiophysics at Belarus State University before leaving university to pursue independent engineering and entrepreneurial work. He is an alumnus of the Belarus State University Lyceum. His background combines commercial agriculture, engineering, software development and industrial automation. EDNA OS is the result of practical field experience rather than academic research alone.",
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
