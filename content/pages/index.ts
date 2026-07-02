export { architecturePage } from "./architecture";
export { companyPage } from "./company";
export { deploymentPage } from "./deployment";
export { documentationPage } from "./documentation";
export { homePage } from "./home";
export { journalPage } from "./journal";
export { measuringOutcomesPage } from "./measuring-outcomes";
export { objectivesPage } from "./objectives";
export { operatingLoopPage } from "./operating-loop";

import { architecturePage } from "./architecture";
import { companyPage } from "./company";
import { deploymentPage } from "./deployment";
import { documentationPage } from "./documentation";
import { homePage } from "./home";
import { journalPage } from "./journal";
import { measuringOutcomesPage } from "./measuring-outcomes";
import { objectivesPage } from "./objectives";
import { operatingLoopPage } from "./operating-loop";

export const pages = {
  home: homePage,
  objectives: objectivesPage,
  operatingLoop: operatingLoopPage,
  measuringOutcomes: measuringOutcomesPage,
  architecture: architecturePage,
  deployment: deploymentPage,
  documentation: documentationPage,
  journal: journalPage,
  company: companyPage,
} as const;

export const allPages = Object.values(pages);
