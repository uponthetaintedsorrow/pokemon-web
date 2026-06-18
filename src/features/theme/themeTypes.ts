// Tipos de tema compartidos por el store, la UI y los tokens.
export type ThemeId = "mysticNight" | "berryLight" | "classicBattle";

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}
