// Estrategias de ordenamiento para pokemones.
import type { Pokemon, PokemonSortOption } from "./pokemonTypes";

const compareNames = (a: Pokemon, b: Pokemon): number => a.name.localeCompare(b.name);
const compareAttack = (a: Pokemon, b: Pokemon): number => a.attack - b.attack;

export const sortStrategies: Record<PokemonSortOption, (items: Pokemon[]) => Pokemon[]> = {
  none: (items) => [...items],
  nameAsc: (items) => [...items].sort(compareNames),
  nameDesc: (items) => [...items].sort((a, b) => compareNames(b, a)),
  attackAsc: (items) => [...items].sort(compareAttack),
  attackDesc: (items) => [...items].sort((a, b) => compareAttack(b, a)),
};
