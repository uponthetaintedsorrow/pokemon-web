// Barra de búsqueda exacta con commit manual al store.
"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/primitives/Button/Button";
import { Input } from "@/components/primitives/Input/Input";
import { useFilterStore } from "@/store/useFilterStore";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  const appliedSearch = useFilterStore((state) => state.search);
  const setSearch = useFilterStore((state) => state.setSearch);
  const clearSearch = useFilterStore((state) => state.clearSearch);
  const [value, setValue] = useState(appliedSearch);

  useEffect(() => {
    setValue(appliedSearch);
  }, [appliedSearch]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSearch(value);
  }

  function handleClear(): void {
    setValue("");
    clearSearch();
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <Input label="Buscar pokemon" name="pokemon-search" onChange={(event) => setValue(event.target.value)} placeholder="Nombre exacto" value={value} />
      <div className={styles.actions}>
        <Button type="submit">Buscar</Button>
        <Button onClick={handleClear} type="button" variant="ghost">Limpiar</Button>
      </div>
    </form>
  );
}
