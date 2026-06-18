// Pantalla que conecta el formulario con el store y la navegación.
"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components/primitives/Container/Container";
import { NavBar } from "@/components/pokemon/NavBar/NavBar";
import { PokemonCreate } from "@/components/pokemon/PokemonCreate/PokemonCreate";
import { createPokemon } from "@/services/pokemonService";
import { usePokemonStore } from "@/store/usePokemonStore";
import styles from "./CreatePokemonScreen.module.css";

export function CreatePokemonScreen() {
  const router = useRouter();
  const existingPokemons = usePokemonStore((state) => [...state.pokemons, ...state.createdPokemons]);
  const addPokemon = usePokemonStore((state) => state.addPokemon);

  async function handleCreate(values: Parameters<typeof createPokemon>[0]): Promise<void> {
    const pokemon = await createPokemon(values);
    addPokemon(pokemon);
    router.push(`/pokemon/${pokemon.id}`);
  }

  return (
    <div>
      <NavBar />
      <Container className={styles.create}>
        <PokemonCreate existingPokemons={existingPokemons} onSubmit={handleCreate} />
      </Container>
    </div>
  );
}
