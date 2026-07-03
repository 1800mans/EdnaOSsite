import NextLink from "next/link";
import type { AriaAttributes, ReactNode } from "react";

import { cx, isExternalUrl } from "@/lib/helpers";

type LinkVariant = "text" | "primary" | "secondary" | "navigation" | "subtle";

interface LinkProps {
  href: string;
  children: ReactNode;
  ariaCurrent?: AriaAttributes["aria-current"];
  className?: string;
  external?: boolean;
  variant?: LinkVariant;
}

const variantClasses: Record<LinkVariant, string> = {
  text: "font-medium text-[var(--color-primary-green)] underline-offset-4 hover:underline",
  primary:
    "inline-flex min-h-11 items-center justify-center rounded-[14px] border border-[var(--color-primary-green)] bg-[var(--color-primary-green)] px-5 py-3 text-sm font-bold text-white hover:bg-[#345a32]",
  secondary:
    "inline-flex min-h-11 items-center justify-center rounded-[14px] border border-[var(--color-primary-green)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-primary-green)] hover:bg-[var(--color-background)]",
  navigation:
    "inline-flex min-h-11 items-center text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary-green)]",
  subtle:
    "font-medium text-[var(--color-text-secondary)] underline-offset-4 hover:text-[var(--color-primary-green)] hover:underline",
};

export function Link({
  href,
  children,
  ariaCurrent,
  className,
  external,
  variant = "text",
}: LinkProps) {
  const isExternal = external ?? isExternalUrl(href);
  const classes = cx("transition", variantClasses[variant], className);

  if (isExternal) {
    return (
      <a
        href={href}
        aria-current={ariaCurrent}
        className={classes}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        <span className="sr-only"> opens in a new tab</span>
      </a>
    );
  }

  return (
    <NextLink href={href} aria-current={ariaCurrent} className={classes}>
      {children}
    </NextLink>
  );
}
