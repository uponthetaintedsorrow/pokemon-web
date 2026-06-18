// Normaliza texto para búsquedas y comparaciones exactas.
export function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}
