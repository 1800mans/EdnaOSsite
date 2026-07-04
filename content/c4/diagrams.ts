export interface C4DiagramReference {
  id: string;
  title: string;
  level: "Context" | "Container" | "Component";
  description: string;
  elements: string[];
  relationships: string[];
}

export const c4Diagrams = {
  orchardOperatingSystemContext: {
    id: "orchard-operating-system-context",
    title: "Orchard Operating System Context",
    level: "Context",
    description:
      "Context reference showing EDNA OS as the coordination layer between orchard infrastructure, field instrumentation and engineering records.",
    elements: [
      "Commercial orchard operation",
      "Field infrastructure",
      "PLC control layer",
      "Edge telemetry layer",
      "Engineering record archive",
    ],
    relationships: [
      "Field infrastructure produces operating signals for PLC control.",
      "PLC and field instrumentation provide telemetry to the engineering record archive.",
      "Engineering records preserve evidence used to revise future operating decisions.",
    ],
  },
} satisfies Record<string, C4DiagramReference>;

export type C4DiagramKey = keyof typeof c4Diagrams;
