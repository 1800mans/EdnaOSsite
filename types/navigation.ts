export type PageSlug =
  | "home"
  | "objectives"
  | "operatingLoop"
  | "measuringOutcomes"
  | "architecture"
  | "deployment"
  | "documentation"
  | "journal"
  | "about";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface PageNavigationItem extends NavigationItem {
  slug: PageSlug;
  description: string;
}

export interface FooterNavigationGroup {
  title: string;
  items: NavigationItem[];
}

export interface BreadcrumbHierarchyItem {
  label: string;
  href: string;
  parentHref?: string;
}

export interface RelatedPagesRegistry {
  home: PageSlug[];
  objectives: PageSlug[];
  operatingLoop: PageSlug[];
  measuringOutcomes: PageSlug[];
  architecture: PageSlug[];
  deployment: PageSlug[];
  documentation: PageSlug[];
  journal: PageSlug[];
  about: PageSlug[];
}
