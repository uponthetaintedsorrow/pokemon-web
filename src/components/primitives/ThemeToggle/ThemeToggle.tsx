// Selector visual de tema que sincroniza Zustand con el documento raíz.
"use client";

import { Button } from "@/components/primitives/Button/Button";
import { themes } from "@/features/theme/themes";
import { useThemeStore } from "@/store/useThemeStore";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const currentTheme = useThemeStore((state) => state.currentTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div className={styles.toggle} role="group" aria-label="Cambiar tema visual">
      {themes.map((theme) => (
        <Button
          key={theme.id}
          ariaLabel={`Activar tema ${theme.name}`}
          className={currentTheme === theme.id ? styles.active : undefined}
          onClick={() => setTheme(theme.id)}
          variant={currentTheme === theme.id ? "secondary" : "ghost"}
        >
          {theme.name}
        </Button>
      ))}
    </div>
  );
}
