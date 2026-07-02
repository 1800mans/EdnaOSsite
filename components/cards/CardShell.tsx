import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

interface CardShellProps {
  children: ReactNode;
  className?: string;
}

export function CardShell({ children, className }: CardShellProps) {
  return (
    <article
      className={cx(
        "h-full rounded-[18px] border border-[var(--color-border)] bg-white p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </article>
  );
}
