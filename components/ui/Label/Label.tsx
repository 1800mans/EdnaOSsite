import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

interface LabelProps {
  children: ReactNode;
  className?: string;
}

export function Label({ children, className }: LabelProps) {
  return (
    <span
      className={cx(
        "text-xs font-bold uppercase tracking-normal text-[var(--color-primary-green)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
