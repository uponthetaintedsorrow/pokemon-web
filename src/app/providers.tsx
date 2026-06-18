// Provee efectos globales del cliente como la sincronización de tema.
"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { applyTheme } from "@/features/theme/applyTheme";
import { useThemeStore } from "@/store/useThemeStore";

export function Providers({ children }: { children: ReactNode }) {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  return <>{children}</>;
}
