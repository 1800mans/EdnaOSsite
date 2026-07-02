import { relatedPages } from "@/config/navigation";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const deploymentPage = {
  slug: "deployment",
  path: "/deployment",
  purpose: "Demonstrate real-world validation.",
  primaryQuestion: "Where is EDNA being engineered?",
  metadata: pageMetadata.deployment,
  hero: {
    title: "Built on a commercial orchard.",
    subtitle: "Validated through field operation.",
    description:
      "EDNA OS is engineered and validated through commercial orchard operation.",
    image: images.pages.deployment.hero,
  },
  sections: [
    { id: "pilot-orchard", title: "Pilot Orchard" },
    { id: "location", title: "Location" },
    { id: "infrastructure", title: "Infrastructure" },
    { id: "power", title: "Power" },
    { id: "water", title: "Water" },
    { id: "internet", title: "Internet" },
    { id: "telemetry", title: "Telemetry" },
    { id: "current-status", title: "Current Status" },
    { id: "future-expansion", title: "Future Expansion" },
  ],
  relatedPages: relatedPages.deployment,
  primaryCTA: {
    label: "Documentation",
    href: "/documentation",
  },
} satisfies ContentPage;
