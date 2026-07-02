import type { ImageReference } from "@/types/images";

export const images = {
  logos: {
    og: {
      src: "/assets/logos/og-image.webp",
      alt: "EDNA OS engineering documentation image",
      width: 1200,
      height: 630,
    },
  },
} satisfies Record<string, Record<string, ImageReference>>;
