import { Images } from "@/lib/images";
import type { EngineeringJournalRecord } from "@/content/journal/types";

export const baselineOperatingEvidenceRecord = {
  slug: "baseline-operating-evidence",
  title: "Baseline Operating Evidence",
  description:
    "Initial engineering record defining how EDNA OS preserves operating evidence from field validation.",
  datePublished: "2026-07-03",
  dateModified: "2026-07-03",
  status: "published",
  recordType: "Engineering Record",
  schemaType: "TechArticle",
  summary:
    "This record establishes the baseline structure for preserving operational evidence from field validation before deeper measurement reports are published.",
  sections: [
    {
      id: "purpose",
      title: "Purpose",
      summary:
        "The record defines why operating evidence must be preserved as a first-class engineering artifact.",
      body: [
        "EDNA OS is developed through field validation rather than isolated software planning.",
        "Each irrigation cycle produces observations, measurements and revisions that need a durable record before they can improve future decision logic.",
      ],
    },
    {
      id: "field-context",
      title: "Field Context",
      summary:
        "The initial record connects commercial orchard operation with the evidence model used by future journal entries.",
      body: [
        "The pilot orchard contains physical infrastructure, deterministic control, telemetry and root-zone measurement requirements.",
        "The record model keeps those observations connected to pages, ontology entities, C4 references and chart-ready measurement structures.",
      ],
    },
    {
      id: "evidence-model",
      title: "Evidence Model",
      summary:
        "The first evidence structure separates observed conditions from measured values and future engineering changes.",
      body: [
        "Record sections preserve engineering reasoning in a stable format that can later support diagrams, chart rendering and offline entity enrichment.",
        "This avoids embedding engineering records directly inside React components while keeping the website static and searchable.",
      ],
    },
  ],
  entities: [
    "orchardOperatingSystem",
    "operationalEvidence",
    "fieldValidation",
    "distributedControl",
    "telemetry",
    "rootZoneMeasurement",
  ],
  tags: [
    "Orchard Operating System",
    "Operational Evidence",
    "Field Validation",
    "Telemetry",
    "Measurement",
  ],
  relatedPages: ["fieldValidation", "operatingLoop", "measuringOutcomes", "architecture"],
  relatedRecords: [],
  c4Diagrams: ["orchardOperatingSystemContext"],
  charts: ["operatingEvidenceBaseline"],
  images: [Images.pages.journal.fieldNotes],
  googleCnl: {
    status: "not-enriched",
    notes:
      "Google Cloud Natural Language enrichment will be performed offline before commit when record volume justifies entity extraction.",
  },
} satisfies EngineeringJournalRecord;
