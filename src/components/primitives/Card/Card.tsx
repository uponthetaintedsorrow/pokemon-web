// Contenedor visual reutilizable para secciones y cards.
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/utils/cx";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article className={cx(styles.card, className)} {...props}>
      {children}
    </article>
  );
}
