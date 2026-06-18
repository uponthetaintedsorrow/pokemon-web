// Convierte datos de formulario y mocks al formato interno del dominio.
import { createPokemonId } from "@/utils/createPokemonId";
import type { Pokemon, PokemonFormValues } from "./pokemonTypes";

export function adaptPokemonFromForm(values: PokemonFormValues): Pokemon {
  return {
    id: createPokemonId(values.name),
    name: values.name.trim(),
    image: values.image.trim(),
    hp: Number(values.hp),
    attack: Number(values.attack),
    defense: Number(values.defense),
    speed: values.speed ? Number(values.speed) : undefined,
    height: values.height ? Number(values.height) : undefined,
    weight: values.weight ? Number(values.weight) : undefined,
    types: values.types,
    origin: "created",
  };
}

export function adaptPokemonFromMock(pokemon: Pokemon): Pokemon {
  return { ...pokemon };
}
