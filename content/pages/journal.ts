import { relatedPages } from "@/config/navigation";
import { Images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import type { ContentPage } from "@/types/page";

interface JournalRecord {
  id: string;
  title: string;
  summary: string;
}

export const journalRecordedSubjects = [
  {
    id: "validation-observations",
    title: "Validation observations",
    summary:
      "Field observations that show how the system behaves under real orchard operation.",
  },
  {
    id: "field-measurements",
    title: "Field measurements",
    summary:
      "Measured pressure, flow, telemetry, root-zone response and other operational evidence.",
  },
  {
    id: "failures",
    title: "Failures",
    summary:
      "Unexpected behavior, equipment issues and operating conditions that require engineering correction.",
  },
  {
    id: "design-decisions",
    title: "Design decisions",
    summary:
      "Engineering choices made after field evidence changes the understanding of the system.",
  },
  {
    id: "system-revisions",
    title: "System revisions",
    summary:
      "Changes to infrastructure, control logic, instrumentation or operating procedures.",
  },
  {
    id: "operating-lessons",
    title: "Operating lessons",
    summary:
      "Practical lessons from orchard operation that should influence future engineering work.",
  },
  {
    id: "future-questions",
    title: "Future questions",
    summary:
      "Open engineering questions that need more field evidence before conclusions are made.",
  },
] satisfies JournalRecord[];

export const journalEntryTypes = [
  {
    id: "validation-reports",
    title: "Validation Reports",
    summary:
      "Records of field validation work, measured results and engineering conclusions.",
  },
  {
    id: "field-notes",
    title: "Field Notes",
    summary:
      "Short observations from orchard operation, infrastructure work and system behavior in the field.",
  },
  {
    id: "design-decisions",
    title: "Design Decisions",
    summary:
      "Notes explaining why architecture, control logic or instrumentation changed.",
  },
  {
    id: "failure-reports",
    title: "Failure Reports",
    summary:
      "Records of equipment issues, unexpected behavior and corrective engineering work.",
  },
  {
    id: "system-updates",
    title: "System Updates",
    summary:
      "Changes to field infrastructure, telemetry, PLC logic, edge systems or measurement workflows.",
  },
  {
    id: "open-questions",
    title: "Open Questions",
    summary:
      "Unresolved engineering questions that require more field evidence before conclusions are made.",
  },
] satisfies JournalRecord[];

export const journalLogFormat = [
  {
    id: "observed",
    title: "Observed",
    summary: "What was seen in field operation or system behavior.",
  },
  {
    id: "measured",
    title: "Measured",
    summary: "Which values, conditions or responses were recorded.",
  },
  {
    id: "changed",
    title: "Changed",
    summary: "What was adjusted in infrastructure, logic, configuration or procedure.",
  },
  {
    id: "result",
    title: "Result",
    summary: "What changed after the adjustment was tested under operation.",
  },
  {
    id: "next-step",
    title: "Next Step",
    summary: "What evidence is needed before the next engineering decision.",
  },
] satisfies JournalRecord[];

export const journalPage = {
  slug: "journal",
  path: "/journal",
  purpose: "Document engineering progress as a field-log record.",
  primaryQuestion: "What is currently being developed?",
  metadata: pageMetadata.journal,
  hero: {
    title: "Engineering Journal",
    description:
      "A field record of engineering observations, validation work, design revisions and system evolution behind EDNA OS.",
    image: Images.pages.journal.hero,
    supportingText:
      "The journal is intended to preserve field observations, validation reports, design revisions and lessons learned as EDNA OS evolves.",
  },
  sections: [
    {
      id: "purpose",
      title: "Purpose",
      summary:
        "The Engineering Journal documents engineering progress, not announcements. It records how field observations, validation reports, engineering notes, design revisions and lessons learned change EDNA OS over time.",
    },
    {
      id: "what-gets-recorded",
      title: "What Gets Recorded",
      summary:
        "The journal preserves the evidence and reasoning behind system evolution, including what was observed, measured, changed and left unresolved.",
    },
    {
      id: "journal-entry-types",
      title: "Journal Entry Types",
      summary:
        "Journal entries are grouped by the type of engineering record they preserve, so validation evidence remains separate from field notes, design decisions and open questions.",
    },
    {
      id: "engineering-log-format",
      title: "Engineering Log Format",
      summary:
        "Future entries should follow a consistent field-log structure: observed, measured, changed, result and next step.",
    },
    {
      id: "current-status",
      title: "Current Status",
      summary:
        "EDNA OS is in active engineering development. Journal entries will expand as field validation progresses and operational evidence accumulates.",
    },
  ],
  relatedPages: relatedPages.journal,
  primaryCTA: {
    label: "View Field Validation",
    href: "/field-validation",
  },
} satisfies ContentPage;
