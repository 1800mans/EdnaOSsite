import type { BreadcrumbItem } from "@/types/schema";

export function createBreadcrumbs(items: BreadcrumbItem[]): BreadcrumbItem[] {
  return [{ name: "Home", path: "/" }, ...items];
}
