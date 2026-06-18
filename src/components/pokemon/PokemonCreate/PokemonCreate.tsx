// Contenedor visual para la página de creación de pokemones.
import { Card } from "@/components/primitives/Card/Card";
import { SectionTitle } from "@/components/primitives/SectionTitle/SectionTitle";
import type { Pokemon, PokemonFormValues } from "@/features/pokemon/pokemonTypes";
import { PokemonForm } from "../PokemonForm/PokemonForm";
import styles from "./PokemonCreate.module.css";

interface PokemonCreateProps {
  existingPokemons: Pokemon[];
  onSubmit: (values: PokemonFormValues) => Promise<void> | void;
}

export function PokemonCreate({ existingPokemons, onSubmit }: PokemonCreateProps) {
  return (
    <div className={styles.create}>
      <SectionTitle subtitle="Configura stats, tipos e imagen sin validaciones HTML." title="Crear pokemon" />
      <Card className={styles.card}>
        <PokemonForm existingPokemons={existingPokemons} onSubmit={onSubmit} />
      </Card>
    </div>
  );
}
