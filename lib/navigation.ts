import {
  breadcrumbHierarchy,
  footerNavigation,
  mainNavigation,
  primaryNavigation,
  relatedPages,
} from "@/config/navigation";
import type { PageSlug } from "@/types/navigation";

export function getPrimaryNavigation() {
  return primaryNavigation;
}

export function getMainNavigation() {
  return mainNavigation;
}

export function getFooterNavigation() {
  return footerNavigation;
}

export function getBreadcrumbHierarchy() {
  return breadcrumbHierarchy;
}

export function getRelatedPages(slug: PageSlug) {
  return relatedPages[slug];
}
