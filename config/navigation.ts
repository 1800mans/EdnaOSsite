import type {
  BreadcrumbHierarchyItem,
  FooterNavigationGroup,
  PageNavigationItem,
  RelatedPagesRegistry,
} from "@/types/navigation";

export const mainNavigation: PageNavigationItem[] = [
  { slug: "home", label: "Home", href: "/", description: "What is EDNA OS?" },
  {
    slug: "objectives",
    label: "Objectives",
    href: "/objectives",
    description: "Why does EDNA exist?",
  },
  {
    slug: "operatingLoop",
    label: "Operating Loop",
    href: "/operating-loop",
    description: "How does EDNA learn?",
  },
  {
    slug: "measuringOutcomes",
    label: "Measuring Outcomes",
    href: "/measuring-outcomes",
    description: "What makes EDNA different?",
  },
  {
    slug: "architecture",
    label: "Architecture",
    href: "/architecture",
    description: "How is EDNA built?",
  },
  {
    slug: "deployment",
    label: "Deployment",
    href: "/deployment",
    description: "Where is EDNA being engineered?",
  },
  {
    slug: "documentation",
    label: "Documentation",
    href: "/documentation",
    description: "How is EDNA documented?",
  },
  {
    slug: "journal",
    label: "Journal",
    href: "/journal",
    description: "What is currently being developed?",
  },
  {
    slug: "company",
    label: "Company",
    href: "/company",
    description: "Who is building EDNA?",
  },
];

export const primaryNavigation = mainNavigation;

export const footerNavigation: FooterNavigationGroup[] = [
  {
    title: "Engineering",
    items: [
      { label: "Objectives", href: "/objectives" },
      { label: "Operating Loop", href: "/operating-loop" },
      { label: "Measuring Outcomes", href: "/measuring-outcomes" },
      { label: "Architecture", href: "/architecture" },
    ],
  },
  {
    title: "Validation",
    items: [
      { label: "Deployment", href: "/deployment" },
      { label: "Documentation", href: "/documentation" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Project",
    items: [
      { label: "Home", href: "/" },
      { label: "Company", href: "/company" },
    ],
  },
];

export const breadcrumbHierarchy: BreadcrumbHierarchyItem[] = [
  { label: "Home", href: "/" },
  { label: "Objectives", href: "/objectives", parentHref: "/" },
  { label: "Operating Loop", href: "/operating-loop", parentHref: "/" },
  { label: "Measuring Outcomes", href: "/measuring-outcomes", parentHref: "/" },
  { label: "Architecture", href: "/architecture", parentHref: "/" },
  { label: "Deployment", href: "/deployment", parentHref: "/" },
  { label: "Documentation", href: "/documentation", parentHref: "/" },
  { label: "Journal", href: "/journal", parentHref: "/" },
  { label: "Company", href: "/company", parentHref: "/" },
  { label: "Reduce Water Consumption", href: "/objectives/reduce-water-consumption", parentHref: "/objectives" },
  { label: "Reduce Fertilizer Losses", href: "/objectives/reduce-fertilizer-losses", parentHref: "/objectives" },
  { label: "Reduce Soil Erosion", href: "/objectives/reduce-soil-erosion", parentHref: "/objectives" },
  { label: "Improve Root Zone Health", href: "/objectives/improve-root-zone-health", parentHref: "/objectives" },
  { label: "Increase Export Quality", href: "/objectives/increase-export-quality", parentHref: "/objectives" },
  { label: "Improve Production Consistency", href: "/objectives/improve-production-consistency", parentHref: "/objectives" },
  { label: "Lower Operating Costs", href: "/objectives/lower-operating-costs", parentHref: "/objectives" },
  { label: "Operational Evidence", href: "/operating-loop/operational-evidence", parentHref: "/operating-loop" },
  { label: "Delayed Biological Response", href: "/operating-loop/delayed-biological-response", parentHref: "/operating-loop" },
  { label: "Decision Models", href: "/operating-loop/decision-models", parentHref: "/operating-loop" },
  { label: "Lysimeter System", href: "/measuring-outcomes/lysimeter-system", parentHref: "/measuring-outcomes" },
  { label: "Root Zone Monitoring", href: "/measuring-outcomes/root-zone-monitoring", parentHref: "/measuring-outcomes" },
  { label: "Runoff Monitoring", href: "/measuring-outcomes/runoff-monitoring", parentHref: "/measuring-outcomes" },
  { label: "Water Balance", href: "/measuring-outcomes/water-balance", parentHref: "/measuring-outcomes" },
  { label: "Nutrient Loss", href: "/measuring-outcomes/nutrient-loss", parentHref: "/measuring-outcomes" },
  { label: "Tree Response", href: "/measuring-outcomes/tree-response", parentHref: "/measuring-outcomes" },
  { label: "Field Infrastructure", href: "/architecture/field-infrastructure", parentHref: "/architecture" },
  { label: "PLC Layer", href: "/architecture/plc-layer", parentHref: "/architecture" },
  { label: "Edge Layer", href: "/architecture/edge-layer", parentHref: "/architecture" },
  { label: "Cloud Layer", href: "/architecture/cloud-layer", parentHref: "/architecture" },
  { label: "Decision Layer", href: "/architecture/decision-layer", parentHref: "/architecture" },
];

export const relatedPages: RelatedPagesRegistry = {
  home: ["objectives", "operatingLoop", "architecture", "deployment"],
  objectives: ["operatingLoop", "measuringOutcomes", "architecture"],
  operatingLoop: ["objectives", "measuringOutcomes", "architecture"],
  measuringOutcomes: ["operatingLoop", "architecture", "deployment"],
  architecture: ["operatingLoop", "measuringOutcomes", "deployment", "documentation"],
  deployment: ["architecture", "documentation", "journal"],
  documentation: ["architecture", "deployment", "journal"],
  journal: ["documentation", "deployment", "company"],
  company: ["home", "deployment", "journal"],
};
