export interface OntologyEntity {
  id: string;
  name: string;
  type: "Engineering Concept" | "Infrastructure" | "Measurement" | "Process";
  description: string;
  sameAs?: string[];
}

export const ontologyEntities = {
  orchardOperatingSystem: {
    id: "orchard-operating-system",
    name: "Orchard Operating System",
    type: "Engineering Concept",
    description:
      "A coordinated engineering environment for commercial orchard infrastructure, operations and evidence.",
  },
  operationalEvidence: {
    id: "operational-evidence",
    name: "Operational Evidence",
    type: "Measurement",
    description:
      "Measured field records used to evaluate orchard operation and guide engineering decisions.",
  },
  fieldValidation: {
    id: "field-validation",
    name: "Field Validation",
    type: "Process",
    description:
      "Engineering validation performed under real commercial orchard operating conditions.",
  },
  distributedControl: {
    id: "distributed-control",
    name: "Distributed Control",
    type: "Engineering Concept",
    description:
      "Control architecture that separates deterministic field control from edge and cloud responsibilities.",
  },
  telemetry: {
    id: "telemetry",
    name: "Telemetry",
    type: "Infrastructure",
    description:
      "Field data collection and transmission used to preserve operating records over time.",
  },
  rootZoneMeasurement: {
    id: "root-zone-measurement",
    name: "Root Zone Measurement",
    type: "Measurement",
    description:
      "Measurement of soil and tree-relevant field response below the orchard surface.",
  },
} satisfies Record<string, OntologyEntity>;

export type OntologyEntityKey = keyof typeof ontologyEntities;
