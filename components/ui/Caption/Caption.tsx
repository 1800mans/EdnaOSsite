import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

interface CaptionProps {
  children: ReactNode;
  className?: string;
}

export function Caption({ children, className }: CaptionProps) {
  return (
    <p className={cx("text-sm leading-6 text-[var(--color-text-secondary)]", className)}>
      {children}
    </p>
  );
}
