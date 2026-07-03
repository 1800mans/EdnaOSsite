import type { ImageReference } from "@/types/images";

export const Images = {
  logos: {
    logo: {
      src: "/assets/logos/edna-logo.svg",
      alt: "EDNA OS logo",
      width: 512,
      height: 512,
    },
    mark: {
      src: "/assets/logos/edna-mark.svg",
      alt: "EDNA OS mark",
      width: 512,
      height: 512,
    },
    og: {
      src: "/assets/logos/og-image.webp",
      alt: "EDNA OS engineering documentation image",
      width: 1200,
      height: 630,
    },
  },
  openGraph: {
    home: {
      src: "/assets/logos/home-og.webp",
      alt: "EDNA OS Orchard Operating System engineering image",
      width: 1200,
      height: 630,
    },
    architecture: {
      src: "/assets/logos/architecture-og.webp",
      alt: "EDNA OS architecture engineering image",
      width: 1200,
      height: 630,
    },
    fieldValidation: {
      src: "/assets/logos/deployment-og.webp",
      alt: "EDNA OS commercial orchard field validation image",
      width: 1200,
      height: 630,
    },
    journal: {
      src: "/assets/logos/journal-og.webp",
      alt: "EDNA OS engineering journal image",
      width: 1200,
      height: 630,
    },
    about: {
      src: "/assets/logos/about-og.webp",
      alt: "EDNA OS about page engineering image",
      width: 1200,
      height: 630,
    },
  },
  pages: {
    home: {
      hero: {
        src: "/assets/images/home/home-hero-01-xl.webp",
        alt: "Commercial pump station and orchard infrastructure for EDNA OS",
        width: 2400,
        height: 1350,
      },
      manifesto: {
        src: "/assets/images/home/home-manifesto-01-lg.webp",
        alt: "Engineering infrastructure used to document EDNA OS development",
        width: 1600,
        height: 1200,
      },
      architecturePreview: {
        src: "/assets/images/home/home-preview-architecture-01-lg.webp",
        alt: "Architecture preview image showing EDNA OS engineering infrastructure",
        width: 1600,
        height: 1200,
      },
    },
    objectives: {
      hero: {
        src: "/assets/images/objectives/objectives-hero-01-xl.webp",
        alt: "Water, fertilizer and orchard output used to explain EDNA OS objectives",
        width: 2400,
        height: 1350,
      },
    },
    operatingLoop: {
      hero: {
        src: "/assets/images/operating-loop/operating-loop-hero-01-xl.webp",
        alt: "Emitter and wet soil during irrigation operation",
        width: 2400,
        height: 1350,
      },
      process: {
        src: "/assets/images/operating-loop/operating-loop-process-01-lg.webp",
        alt: "Micro-sprinkler irrigation operating beside the orchard root zone",
        width: 1600,
        height: 1200,
      },
    },
    measuringOutcomes: {
      hero: {
        src: "/assets/images/measuring-outcomes/measuring-outcomes-hero-01-xl.webp",
        alt: "Lysimeter and root zone measurement equipment in orchard conditions",
        width: 2400,
        height: 1350,
      },
      drainage: {
        src: "/assets/images/measuring-outcomes/measuring-outcomes-drainage-01-lg.webp",
        alt: "PVC lysimeter drainage and orchard instrumentation used to collect operational evidence",
        width: 1600,
        height: 1200,
      },
      rootZone: {
        src: "/assets/images/measuring-outcomes/measuring-outcomes-root-zone-01-lg.webp",
        alt: "Root zone sensors and irrigation instrumentation installed in orchard soil",
        width: 1600,
        height: 1200,
      },
    },
    architecture: {
      hero: {
        src: "/assets/images/architecture/architecture-hero-01-xl.webp",
        alt: "PLC cabinet and irrigation control infrastructure for EDNA OS",
        width: 2400,
        height: 1350,
      },
      plc: {
        src: "/assets/images/architecture/architecture-plc-01-lg.webp",
        alt: "PLC control equipment used in EDNA OS architecture",
        width: 1600,
        height: 1200,
      },
      vfd: {
        src: "/assets/images/architecture/architecture-vfd-01-lg.webp",
        alt: "VFD and electrical protection equipment used for pump control",
        width: 1600,
        height: 1200,
      },
      pumpstation: {
        src: "/assets/images/architecture/architecture-pumpstation-01-lg.webp",
        alt: "Outdoor irrigation pump station and manifold infrastructure for EDNA OS",
        width: 1600,
        height: 1200,
      },
      edge: {
        src: "/assets/images/architecture/architecture-edge-01-lg.webp",
        alt: "Edge layer infrastructure for orchard telemetry",
        width: 1600,
        height: 1200,
      },
      cloud: {
        src: "/assets/images/architecture/architecture-cloud-01-lg.webp",
        alt: "Cloud layer reference image for EDNA OS telemetry records",
        width: 1600,
        height: 1200,
      },
    },
    fieldValidation: {
      hero: {
        src: "/assets/images/deployment/deployment-hero-01-xl.webp",
        alt: "Commercial durian orchard used for EDNA OS field validation",
        width: 2400,
        height: 1350,
      },
      pumpstation: {
        src: "/assets/images/deployment/deployment-pumpstation-01-lg.webp",
        alt: "Pump station infrastructure used for EDNA OS field validation",
        width: 1600,
        height: 1200,
      },
      reservoir: {
        src: "/assets/images/deployment/deployment-reservoir-01-lg.webp",
        alt: "Reservoir infrastructure supporting commercial orchard field validation",
        width: 1600,
        height: 1200,
      },
      irrigation: {
        src: "/assets/images/deployment/deployment-irrigation-01-lg.webp",
        alt: "Irrigation infrastructure and telemetry used for field validation",
        width: 1600,
        height: 1200,
      },
    },
    documentation: {
      hero: {
        src: "/assets/images/documentation/documentation-hero-01-xl.webp",
        alt: "Engineering notebook, PLC wiring and field measurement records",
        width: 2400,
        height: 1350,
      },
    },
    journal: {
      hero: {
        src: "/assets/images/journal/journal-hero-01-xl.webp",
        alt: "Engineering field work and sensor validation in orchard conditions",
        width: 2400,
        height: 1350,
      },
      fieldNotes: {
        src: "/assets/images/journal/journal-field-notes-01-lg.webp",
        alt: "Engineering field notebook and orchard measurement records",
        width: 1600,
        height: 1200,
      },
    },
    about: {
      hero: {
        src: "/assets/images/about/about-hero-01-xl.webp",
        alt: "Founder working in orchard field conditions",
        width: 2400,
        height: 1350,
      },
      founder: {
        src: "/assets/images/about/about-founder-01-lg.webp",
        alt: "Founder working in the EDNA OS commercial orchard",
        width: 1600,
        height: 1200,
      },
    },
  },
  shared: {
    cardPlaceholder: {
      src: "/assets/images/shared/card-placeholder.webp",
      alt: "Engineering content placeholder",
      width: 1200,
      height: 900,
    },
    articlePlaceholder: {
      src: "/assets/images/shared/article-placeholder.webp",
      alt: "Engineering article placeholder",
      width: 1200,
      height: 900,
    },
    sectionDivider: {
      src: "/assets/images/shared/section-divider.webp",
      alt: "",
      width: 1600,
      height: 1200,
    },
  },
} satisfies {
  logos: Record<string, ImageReference>;
  openGraph: Record<string, ImageReference>;
  pages: Record<string, Record<string, ImageReference>>;
  shared: Record<string, ImageReference>;
};

export const images = Images;
