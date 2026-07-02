import { Container } from "@/components/layout/Container";
import { Divider } from "@/components/layout/Divider";
import { Link } from "@/components/ui/Link";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-bold text-[var(--color-text-primary)]">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-[42ch] text-sm leading-6 text-[var(--color-text-secondary)]">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <nav key={group.title} aria-label={`${group.title} footer links`}>
                <p className="text-sm font-bold text-[var(--color-text-primary)]">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} variant="subtle">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <Divider className="my-8" />
        <p className="text-sm text-[var(--color-text-secondary)]">
          Copyright {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
