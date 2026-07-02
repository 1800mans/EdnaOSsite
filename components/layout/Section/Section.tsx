import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";
import { cx } from "@/lib/helpers";

type SectionSpacing = "medium" | "large" | "xlarge";
type SectionBackground = "default" | "surface";

interface SectionProps {
  children: ReactNode;
  id?: string;
  spacing?: SectionSpacing;
  background?: SectionBackground;
  className?: string;
}

const spacingClasses: Record<SectionSpacing, string> = {
  medium: "py-12 sm:py-16",
  large: "py-16 sm:py-24",
  xlarge: "py-24 sm:py-32",
};

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-[var(--color-background)]",
  surface: "bg-[var(--color-surface)]",
};

export function Section({
  children,
  id,
  spacing = "large",
  background = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx(spacingClasses[spacing], backgroundClasses[background], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
