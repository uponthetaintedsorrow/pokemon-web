// Valida manualmente el formulario de creación de pokemones.
import type { PokemonFieldErrors, PokemonFormValues, Pokemon, PokemonTypeName } from "./pokemonTypes";
import { normalizeText } from "@/utils/normalizeText";

function isValidImageValue(value: string): boolean {
  if (!value.trim()) return false;
  if (value.startsWith("/")) return true;
  try {
    return Boolean(new URL(value));
  } catch {
    return false;
  }
}

function isPositiveNumber(value: string): boolean {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0;
}

export function validatePokemonForm(values: PokemonFormValues, existingPokemons: Pokemon[]): PokemonFieldErrors {
  const errors: PokemonFieldErrors = {};
  const normalizedName = normalizeText(values.name);
  const duplicatedName = existingPokemons.some((pokemon) => normalizeText(pokemon.name) === normalizedName);

  if (normalizedName.length < 2) errors.name = "El nombre debe tener al menos 2 caracteres.";
  else if (duplicatedName) errors.name = "Ya existe un pokemon con ese nombre.";

  if (!isValidImageValue(values.image)) errors.image = "Ingresa una URL o ruta de imagen válida.";
  if (!isPositiveNumber(values.hp)) errors.hp = "La vida debe ser un número mayor que 0.";
  if (!isPositiveNumber(values.attack)) errors.attack = "El ataque debe ser un número mayor que 0.";
  if (!isPositiveNumber(values.defense)) errors.defense = "La defensa debe ser un número mayor que 0.";
  if (values.speed && !isPositiveNumber(values.speed)) errors.speed = "La velocidad debe ser mayor que 0.";
  if (values.height && !isPositiveNumber(values.height)) errors.height = "La altura debe ser mayor que 0.";
  if (values.weight && !isPositiveNumber(values.weight)) errors.weight = "El peso debe ser mayor que 0.";
  if (values.types.length < 1) errors.types = "Selecciona al menos un tipo.";
  if (values.types.length > 2) errors.types = "Solo puedes seleccionar máximo 2 tipos.";

  return errors;
}

export function hasPokemonFormErrors(errors: PokemonFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function togglePokemonType(selectedTypes: PokemonTypeName[], type: PokemonTypeName): PokemonTypeName[] {
  if (selectedTypes.includes(type)) return selectedTypes.filter((item) => item !== type);
  if (selectedTypes.length >= 2) return selectedTypes;
  return [...selectedTypes, type];
}
