import { cx } from "@/lib/helpers";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return <hr className={cx("border-t border-[var(--color-border)]", className)} />;
}
