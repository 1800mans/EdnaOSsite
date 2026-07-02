import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

type TextSize = "body" | "large" | "small";

interface TextProps {
  children: ReactNode;
  size?: TextSize;
  muted?: boolean;
  className?: string;
}

const sizeClasses: Record<TextSize, string> = {
  body: "text-base leading-7",
  large: "text-lg leading-8",
  small: "text-sm leading-6",
};

export function Text({ children, size = "body", muted = false, className }: TextProps) {
  return (
    <p
      className={cx(
        "max-w-[75ch]",
        sizeClasses[size],
        muted ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-primary)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
