// Estado de carga ligero para pantallas y listas.
import { Card } from "@/components/primitives/Card/Card";
import styles from "./LoadingState.module.css";

interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Cargando pokemones..." }: LoadingStateProps) {
  return (
    <Card className={styles.loading}>
      <div className={styles.spinner} aria-hidden="true" />
      <p>{label}</p>
    </Card>
  );
}
