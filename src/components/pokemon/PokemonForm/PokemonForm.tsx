// Formulario controlado para crear pokemones con validación manual.
"use client";

import Image from "next/image";
import { useMemo, useState, type FormEvent } from "react";
import { Badge } from "@/components/primitives/Badge/Badge";
import { Button } from "@/components/primitives/Button/Button";
import { Input } from "@/components/primitives/Input/Input";
import { pokemonTypeMock } from "@/mocks/typeMock";
import { hasPokemonFormErrors, togglePokemonType, validatePokemonForm } from "@/features/pokemon/pokemonValidation";
import type { Pokemon, PokemonFieldErrors, PokemonFormValues, PokemonTypeName } from "@/features/pokemon/pokemonTypes";
import { TypeBadgeList } from "../TypeBadgeList/TypeBadgeList";
import styles from "./PokemonForm.module.css";

interface PokemonFormProps {
  existingPokemons: Pokemon[];
  onSubmit: (values: PokemonFormValues) => Promise<void> | void;
}

const initialValues: PokemonFormValues = {
  name: "",
  image: "",
  hp: "",
  attack: "",
  defense: "",
  speed: "",
  height: "",
  weight: "",
  types: [],
};

export function PokemonForm({ existingPokemons, onSubmit }: PokemonFormProps) {
  const [values, setValues] = useState<PokemonFormValues>(initialValues);
  const [errors, setErrors] = useState<PokemonFieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const preview = useMemo(() => (values.name || values.image ? { name: values.name, image: values.image, types: values.types } : null), [values]);

  function resetForm(): void {
    setValues(initialValues);
    setErrors({});
    setSubmitError(null);
  }

  function updateField<K extends keyof PokemonFormValues>(field: K, value: PokemonFormValues[K]): void {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleTypeChange(type: PokemonTypeName): void {
    setValues((current) => ({ ...current, types: togglePokemonType(current.types, type) }));
    setErrors((current) => ({ ...current, types: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const nextErrors = validatePokemonForm(values, existingPokemons);
    setErrors(nextErrors);
    setSubmitError(null);

    if (hasPokemonFormErrors(nextErrors)) return;

    try {
      await onSubmit(values);
      resetForm();
    } catch {
      setSubmitError("No se pudo crear el pokemon. Intenta nuevamente.");
    }
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <Input error={errors.name} label="Nombre" name="name" onChange={(event) => updateField("name", event.target.value)} placeholder="Ej. Pikachu" value={values.name} />
        <Input error={errors.image} label="Imagen" name="image" onChange={(event) => updateField("image", event.target.value)} placeholder="https://..." value={values.image} />
        <Input error={errors.hp} label="Vida" name="hp" onChange={(event) => updateField("hp", event.target.value)} placeholder="35" type="text" value={values.hp} />
        <Input error={errors.attack} label="Ataque" name="attack" onChange={(event) => updateField("attack", event.target.value)} placeholder="55" type="text" value={values.attack} />
        <Input error={errors.defense} label="Defensa" name="defense" onChange={(event) => updateField("defense", event.target.value)} placeholder="40" type="text" value={values.defense} />
        <Input error={errors.speed} label="Velocidad" name="speed" onChange={(event) => updateField("speed", event.target.value)} placeholder="90" type="text" value={values.speed} />
        <Input error={errors.height} label="Altura" name="height" onChange={(event) => updateField("height", event.target.value)} placeholder="4" type="text" value={values.height} />
        <Input error={errors.weight} label="Peso" name="weight" onChange={(event) => updateField("weight", event.target.value)} placeholder="60" type="text" value={values.weight} />
      </div>

      <section className={styles.typesSection}>
        <div className={styles.typesHeader}>
          <h3>Tipos</h3>
          <Badge tone="muted">{values.types.length}/2</Badge>
        </div>
        <div className={styles.typesGrid}>
          {pokemonTypeMock.map((type) => (
            <Button key={type} className={values.types.includes(type) ? styles.selectedType : undefined} onClick={() => handleTypeChange(type)} type="button" variant={values.types.includes(type) ? "secondary" : "ghost"}>
              {type}
            </Button>
          ))}
        </div>
        {errors.types ? <p className={styles.error}>{errors.types}</p> : null}
        {values.types.length > 0 ? <TypeBadgeList types={values.types} /> : null}
      </section>

      {preview ? (
        <section className={styles.preview}>
          <h3>Vista previa</h3>
          {preview.image ? <Image alt={preview.name || "Pokemon"} className={styles.previewImage} height={180} src={preview.image} unoptimized width={180} /> : null}
          <p>{preview.name || "Pokemon nuevo"}</p>
          {preview.types.length > 0 ? <TypeBadgeList types={preview.types} /> : null}
        </section>
      ) : null}

      {submitError ? <p className={styles.error}>{submitError}</p> : null}

      <div className={styles.actions}>
        <Button type="submit">Crear pokemon</Button>
        <Button onClick={resetForm} type="button" variant="ghost">Limpiar formulario</Button>
      </div>
    </form>
  );
}
