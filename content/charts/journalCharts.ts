export interface JournalChart {
  id: string;
  title: string;
  description: string;
  columns: string[];
  rows: string[][];
  source: string;
}

export const journalCharts = {
  operatingEvidenceBaseline: {
    id: "operating-evidence-baseline",
    title: "Operating Evidence Baseline",
    description:
      "Initial structure for comparing observed field evidence before chart rendering is introduced.",
    columns: ["Evidence area", "Observed baseline", "Future record value"],
    rows: [
      [
        "Flow",
        "Inline flow instrumentation planned as operating evidence",
        "Measured flow by irrigation cycle",
      ],
      [
        "Pressure",
        "Pressure verification identified as a required control signal",
        "Pressure range by zone",
      ],
      [
        "Root zone",
        "Root-zone response identified as a primary outcome",
        "Soil moisture, EC and temperature records",
      ],
      [
        "Telemetry",
        "Field telemetry identified as the permanent record path",
        "Complete cycle history",
      ],
    ],
    source: "EDNA OS field engineering record",
  },
} satisfies Record<string, JournalChart>;

export type JournalChartKey = keyof typeof journalCharts;
