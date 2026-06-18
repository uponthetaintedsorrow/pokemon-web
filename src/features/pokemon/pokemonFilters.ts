// Aplica filtros puros sobre colecciones de pokemones.
import type { Pokemon, PokemonFilters } from "./pokemonTypes";
import { normalizeText } from "@/utils/normalizeText";

export function filterBySearch(pokemons: Pokemon[], search: string): Pokemon[] {
  const normalizedSearch = normalizeText(search);
  if (!normalizedSearch) return pokemons;
  return pokemons.filter((pokemon) => normalizeText(pokemon.name) === normalizedSearch);
}

export function filterByType(pokemons: Pokemon[], selectedType: PokemonFilters["selectedType"]): Pokemon[] {
  if (selectedType === "all") return pokemons;
  return pokemons.filter((pokemon) => pokemon.types.includes(selectedType));
}

export function filterByOrigin(pokemons: Pokemon[], selectedOrigin: PokemonFilters["selectedOrigin"]): Pokemon[] {
  if (selectedOrigin === "all") return pokemons;
  return pokemons.filter((pokemon) => pokemon.origin === selectedOrigin);
}
