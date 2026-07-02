import type { ReactNode } from "react";

import { cx } from "@/lib/helpers";

type CalloutTone = "default" | "success" | "warning" | "error";

interface CalloutProps {
  children: ReactNode;
  title?: string;
  tone?: CalloutTone;
  className?: string;
}

const toneClasses: Record<CalloutTone, string> = {
  default: "border-[var(--color-border)]",
  success: "border-[var(--color-success)]",
  warning: "border-[var(--color-warning)]",
  error: "border-[var(--color-error)]",
};

export function Callout({ children, title, tone = "default", className }: CalloutProps) {
  return (
    <aside
      className={cx(
        "rounded-[18px] border bg-white p-6 text-[var(--color-text-primary)]",
        toneClasses[tone],
        className,
      )}
    >
      {title ? <p className="mb-3 font-bold">{title}</p> : null}
      <div className="text-base leading-7 text-[var(--color-text-secondary)]">
        {children}
      </div>
    </aside>
  );
}
