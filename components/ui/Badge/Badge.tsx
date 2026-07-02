import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-sm font-medium text-[var(--color-text-secondary)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
