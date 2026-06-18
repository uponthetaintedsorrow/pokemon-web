// Barra superior con navegación, búsqueda y cambio de tema.
"use client";

import Link from "next/link";
import { Container } from "@/components/primitives/Container/Container";
import { ThemeToggle } from "@/components/primitives/ThemeToggle/ThemeToggle";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <header className={styles.navbar}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/home">pokemon-web</Link>
        <nav className={styles.links} aria-label="Navegación principal">
          <Link href="/home">Home</Link>
          <Link href="/create">Crear</Link>
        </nav>
        <div className={styles.tools}>
          <SearchBar />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
