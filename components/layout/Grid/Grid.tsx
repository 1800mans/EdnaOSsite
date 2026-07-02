import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

type GridColumns = 2 | 3 | 4;

interface GridProps {
  children: ReactNode;
  columns?: GridColumns;
  className?: string;
}

const columnClasses: Record<GridColumns, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
};

export function Grid({ children, columns = 3, className }: GridProps) {
  return (
    <div className={cx("grid grid-cols-1 gap-6", columnClasses[columns], className)}>
      {children}
    </div>
  );
}
