import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

type ContainerWidth = "site" | "content" | "reading" | "full";

interface ContainerProps {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
}

const widthClasses: Record<ContainerWidth, string> = {
  site: "max-w-[1600px]",
  content: "max-w-[1200px]",
  reading: "max-w-[760px]",
  full: "max-w-none",
};

export function Container({ children, width = "content", className }: ContainerProps) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        widthClasses[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
