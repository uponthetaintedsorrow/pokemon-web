// Selecciona y deriva colecciones de pokemones sin efectos secundarios.
import { getPaginatedSlice, getTotalPages } from "@/utils/pagination";
import { filterByOrigin, filterBySearch, filterByType } from "./pokemonFilters";
import { sortStrategies } from "./pokemonSorters";
import type { Pokemon, PokemonFilters, PokemonTypeName, PokemonSortOption } from "./pokemonTypes";

export function getAllPokemons(basePokemons: Pokemon[], createdPokemons: Pokemon[]): Pokemon[] {
  return [...basePokemons, ...createdPokemons];
}

export function getPokemonById(allPokemons: Pokemon[], id: string): Pokemon | undefined {
  return allPokemons.find((pokemon) => pokemon.id === id);
}

export function getFilteredPokemons(allPokemons: Pokemon[], filters: PokemonFilters): Pokemon[] {
  const bySearch = filterBySearch(allPokemons, filters.search);
  const byType = filterByType(bySearch, filters.selectedType);
  return filterByOrigin(byType, filters.selectedOrigin);
}

export function getSortedPokemons(pokemons: Pokemon[], sortBy: PokemonSortOption): Pokemon[] {
  return sortStrategies[sortBy](pokemons);
}

export function getPaginatedPokemons(pokemons: Pokemon[], currentPage: number, pageSize: number): Pokemon[] {
  return getPaginatedSlice(pokemons, currentPage, pageSize);
}

export function getAvailableTypes(pokemons: Pokemon[]): PokemonTypeName[] {
  const types = new Set<PokemonTypeName>();
  pokemons.forEach((pokemon) => pokemon.types.forEach((type) => types.add(type)));
  return [...types].sort((a, b) => a.localeCompare(b));
}

export function getVisiblePokemons(basePokemons: Pokemon[], createdPokemons: Pokemon[], filters: PokemonFilters): Pokemon[] {
  const all = getAllPokemons(basePokemons, createdPokemons);
  return getSortedPokemons(getFilteredPokemons(all, filters), filters.sortBy);
}

export function getVisiblePokemonPageCount(basePokemons: Pokemon[], createdPokemons: Pokemon[], filters: PokemonFilters, pageSize: number): number {
  return getTotalPages(getVisiblePokemons(basePokemons, createdPokemons, filters).length, pageSize);
}

export function getFilteredPokemonById(basePokemons: Pokemon[], createdPokemons: Pokemon[], id: string): Pokemon | undefined {
  return getPokemonById(getAllPokemons(basePokemons, createdPokemons), id);
}
