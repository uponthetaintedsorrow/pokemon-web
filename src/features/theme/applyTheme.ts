// Aplica el tema seleccionado al documento raíz.
import { themes } from "./themes";
import type { ThemeId } from "./themeTypes";

export function applyTheme(themeId: ThemeId): void {
  const root = document.documentElement;
  const theme = themes.find((item) => item.id === themeId) ?? themes[0];

  root.dataset.theme = theme.id;
  root.style.setProperty("--theme-primary", theme.primaryColor);
  root.style.setProperty("--theme-secondary", theme.secondaryColor);
  root.style.setProperty("--theme-background", theme.backgroundColor);
  root.style.setProperty("--theme-text", theme.textColor);
}
