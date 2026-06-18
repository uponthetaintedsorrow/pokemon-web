// Campo de texto controlado con label y mensaje de error.
import type { InputHTMLAttributes, ReactNode } from "react";
import { cx } from "@/utils/cx";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: ReactNode;
}

export function Input({ label, error, helperText, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className={cx(styles.field, className)} htmlFor={inputId}>
      <span className={styles.label}>{label}</span>
      <input id={inputId} className={cx(styles.input, error && styles.errorInput)} {...props} />
      {helperText ? <span className={styles.helper}>{helperText}</span> : null}
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
}
