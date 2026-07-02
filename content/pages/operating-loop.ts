import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

export const operatingLoopPage = {
  slug: "operatingLoop",
  path: "/operating-loop",
  purpose: "Explain how EDNA learns.",
  primaryQuestion: "How does the system improve?",
  metadata: pageMetadata.operatingLoop,
  hero: {
    title: "Every irrigation cycle is a controlled experiment.",
    description:
      "Every experiment produces operational evidence. Operational evidence improves future decision logic.",
    image: Images.pages.operatingLoop.hero,
  },
  sections: [
    { id: "observe", title: "Observe" },
    { id: "operate", title: "Operate" },
    { id: "measure", title: "Measure" },
    { id: "record", title: "Record" },
    { id: "evaluate", title: "Evaluate" },
    { id: "improve", title: "Improve" },
  ],
  relatedPages: relatedPages.operatingLoop,
  primaryCTA: {
    label: "Measuring Outcomes",
    href: "/measuring-outcomes",
  },
} satisfies ContentPage;
