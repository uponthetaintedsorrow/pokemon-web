// Estado de error reutilizable con acción de recuperación.
import type { ReactNode } from "react";
import { Button } from "@/components/primitives/Button/Button";
import { Card } from "@/components/primitives/Card/Card";
import styles from "./ErrorState.module.css";

interface ErrorStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  action?: ReactNode;
}

export function ErrorState({ title, description, actionLabel, onAction, action }: ErrorStateProps) {
  return (
    <Card className={styles.error}>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {action ?? (actionLabel && onAction ? <Button onClick={onAction}>{actionLabel}</Button> : null)}
    </Card>
  );
}
