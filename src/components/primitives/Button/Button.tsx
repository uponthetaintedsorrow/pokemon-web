// Botón base reutilizable para acciones principales y secundarias.
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/utils/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  ariaLabel?: string;
  className?: string;
}

export function Button({ children, variant = "primary", ariaLabel, className, type = "button", ...props }: ButtonProps) {
  return (
    <button aria-label={ariaLabel} className={cx(styles.button, styles[variant], className)} type={type} {...props}>
      {children}
    </button>
  );
}
