import { Link } from "@/components/ui/Link";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cx } from "@/lib/helpers";

interface NavigationProps {
  currentPath?: string;
}

export function Navigation({ currentPath }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          variant="navigation"
          className="font-bold text-[var(--color-text-primary)]"
        >
          {siteConfig.name}
        </Link>
        <ul className="hidden items-center gap-5 lg:flex">
          {mainNavigation.map((item) => {
            const isCurrent = currentPath === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  ariaCurrent={isCurrent ? "page" : undefined}
                  variant="navigation"
                  className={cx(isCurrent && "text-[var(--color-primary-green)]")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav
        aria-label="Primary mobile navigation"
        className="border-t border-[var(--color-border)] bg-white lg:hidden"
      >
        <ul className="mx-auto flex max-w-[760px] flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2">
          {mainNavigation.map((item) => {
            const isCurrent = currentPath === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  ariaCurrent={isCurrent ? "page" : undefined}
                  variant="navigation"
                  className={cx(
                    "min-h-9 whitespace-nowrap text-center text-xs",
                    isCurrent && "text-[var(--color-primary-green)]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
