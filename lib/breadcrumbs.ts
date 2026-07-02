import { breadcrumbHierarchy } from "@/config/navigation";
import type { BreadcrumbItem } from "@/types/schema";

export function createBreadcrumbs(path: string): BreadcrumbItem[] {
  const current = findBreadcrumbItem(path);
  if (!current) {
    return [{ name: "Home", path: "/" }];
  }

  const parents = collectParents(current.parentHref);
  return [...parents, { name: current.label, path: current.href }];
}

export function getBreadcrumbLabel(path: string): string | undefined {
  return findBreadcrumbItem(path)?.label;
}

function collectParents(parentHref: string | undefined): BreadcrumbItem[] {
  if (!parentHref) {
    return [];
  }

  const parent = findBreadcrumbItem(parentHref);
  if (!parent) {
    return [];
  }

  return [
    ...collectParents(parent.parentHref),
    {
      name: parent.label,
      path: parent.href,
    },
  ];
}

function findBreadcrumbItem(path: string) {
  return breadcrumbHierarchy.find((item) => item.href === path);
}
