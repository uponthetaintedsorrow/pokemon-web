// Store de pokemones con base mockeada y pokemones creados.
import { create } from "zustand";
import { pokemonMock } from "@/mocks/pokemonMock";
import { getAllPokemons, getPokemonById as selectPokemonById } from "@/features/pokemon/pokemonSelectors";
import type { Pokemon } from "@/features/pokemon/pokemonTypes";

interface PokemonStore {
  pokemons: Pokemon[];
  createdPokemons: Pokemon[];
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
  setStatus: (status: PokemonStore["status"], error?: string | null) => void;
  addPokemon: (pokemon: Pokemon) => void;
  getPokemonById: (id: string) => Pokemon | undefined;
}

export const usePokemonStore = create<PokemonStore>((set, get) => ({
  pokemons: pokemonMock,
  createdPokemons: [],
  status: "success",
  error: null,
  setStatus: (status, error = null) => set({ status, error }),
  addPokemon: (pokemon) =>
    set((state) => ({
      createdPokemons: [...state.createdPokemons, pokemon],
    })),
  getPokemonById: (id) => selectPokemonById(getAllPokemons(get().pokemons, get().createdPokemons), id),
}));
