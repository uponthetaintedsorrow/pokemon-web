// Selector reutilizable con opciones, label y errores.
import type { SelectHTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import styles from "./Select.module.css";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
}

export function Select({ label, options, error, id, className, children, ...props }: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <label className={cx(styles.field, className)} htmlFor={selectId}>
      <span className={styles.label}>{label}</span>
      <select id={selectId} className={cx(styles.select, error && styles.errorSelect)} {...props}>
        {children}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
}
