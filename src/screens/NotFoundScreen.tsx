// Pantalla de ruta inexistente o recurso ausente.
import Link from "next/link";
import { Container } from "@/components/primitives/Container/Container";
import { EmptyState } from "@/components/primitives/EmptyState/EmptyState";
import styles from "./NotFoundScreen.module.css";

export function NotFoundScreen() {
  return (
    <Container className={styles.notFound}>
      <EmptyState action={<Link className={styles.link} href="/home">Volver al Home</Link>} description="La ruta o el pokemon solicitado no existen." title="404 - No encontrado" />
    </Container>
  );
}
