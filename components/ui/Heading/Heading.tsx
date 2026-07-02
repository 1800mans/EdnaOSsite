import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  id?: string;
  className?: string;
}

const levelClasses: Record<HeadingLevel, string> = {
  1: "text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl",
  2: "text-3xl font-bold leading-tight sm:text-4xl",
  3: "text-2xl font-bold leading-snug",
  4: "text-xl font-bold leading-snug",
};

export function Heading({ children, level = 2, id, className }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      id={id}
      className={cx(
        "tracking-normal text-[var(--color-text-primary)]",
        levelClasses[level],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
