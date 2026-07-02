import { Link } from "@/components/ui/Link";
import { createBreadcrumbs } from "@/lib/breadcrumbs";
import { cx } from "@/lib/helpers";

interface BreadcrumbProps {
  path: string;
  className?: string;
}

export function Breadcrumb({ path, className }: BreadcrumbProps) {
  const breadcrumbs = createBreadcrumbs(path);

  return (
    <nav aria-label="Breadcrumb" className={cx("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-[var(--color-text-secondary)]">
        {breadcrumbs.map((item, index) => {
          const isCurrent = index === breadcrumbs.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isCurrent ? (
                <span aria-current="page" className="text-[var(--color-text-primary)]">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="text-[var(--color-text-secondary)]">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
