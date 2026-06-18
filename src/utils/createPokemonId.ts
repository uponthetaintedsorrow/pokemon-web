// Genera un ID estable para pokemones creados desde el formulario.
export function createPokemonId(name: string): string {
  const slug = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const suffix = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
  return `created-${slug || "pokemon"}-${suffix}`;
}
