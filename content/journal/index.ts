export type {
  EngineeringJournalRecord,
  GoogleCnlEnrichment,
  GoogleCnlEntity,
  JournalRecordSection,
  JournalRecordStatus,
  JournalRecordType,
  JournalSchemaType,
} from "./types";
export { journalRecordStatuses, journalRecordTypes, journalSchemaTypes } from "./types";

import { baselineOperatingEvidenceRecord } from "./records/baseline-operating-evidence";

export const journalRecords = [baselineOperatingEvidenceRecord] as const;
