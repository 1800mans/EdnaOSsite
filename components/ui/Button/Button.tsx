import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cx } from "@/lib/helpers";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--color-primary-green)] bg-[var(--color-primary-green)] text-white hover:bg-[#345a32]",
  secondary:
    "border border-[var(--color-primary-green)] bg-white text-[var(--color-primary-green)] hover:bg-[var(--color-background)]",
  outline:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--color-primary-green)]",
  text: "border border-transparent bg-transparent text-[var(--color-primary-green)] hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "min-h-11 px-4 py-2 text-sm",
  medium: "min-h-11 px-5 py-3 text-sm",
  large: "min-h-12 px-6 py-3 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "medium",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "inline-flex items-center justify-center rounded-[14px] font-bold transition",
        "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-primary-green)]",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
