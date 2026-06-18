// Une clases CSS de forma segura y sin dependencias externas.
export function cx(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
