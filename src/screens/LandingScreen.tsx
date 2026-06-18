// Pantalla de entrada para presentar la Pokédex moderna.
import Link from "next/link";
import { Container } from "@/components/primitives/Container/Container";
import { SectionTitle } from "@/components/primitives/SectionTitle/SectionTitle";
import { ThemeToggle } from "@/components/primitives/ThemeToggle/ThemeToggle";
import styles from "./LandingScreen.module.css";

export function LandingScreen() {
  return (
    <main className={styles.landing}>
      <Container className={styles.inner}>
        <SectionTitle subtitle="Explora, filtra y crea con una interfaz clara, rápida y temática." title="pokemon-web" />
        <p className={styles.copy}>Una Pokédex moderna inspirada en Henry, lista para búsqueda exacta, filtros combinables y creación de pokemones.</p>
        <div className={styles.actions}>
          <Link className={styles.cta} href="/home">Entrar a la Pokédex</Link>
          <ThemeToggle />
        </div>
      </Container>
    </main>
  );
}
