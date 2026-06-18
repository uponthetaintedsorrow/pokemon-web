// Estado vacío reutilizable para listas sin resultados.
import type { ReactNode } from "react";
import { Card } from "@/components/primitives/Card/Card";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <Card className={styles.empty}>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {action ? <div className={styles.action}>{action}</div> : null}
    </Card>
  );
}
