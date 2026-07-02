import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

type StackGap = "small" | "medium" | "large" | "xlarge";

interface StackProps {
  children: ReactNode;
  gap?: StackGap;
  className?: string;
}

const gapClasses: Record<StackGap, string> = {
  small: "gap-2",
  medium: "gap-4",
  large: "gap-6",
  xlarge: "gap-8",
};

export function Stack({ children, gap = "medium", className }: StackProps) {
  return (
    <div className={cx("flex flex-col", gapClasses[gap], className)}>{children}</div>
  );
}
