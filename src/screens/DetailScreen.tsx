// Pantalla de detalle que resuelve el pokemon desde Zustand.
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/primitives/Button/Button";
import { EmptyState } from "@/components/primitives/EmptyState/EmptyState";
import { Container } from "@/components/primitives/Container/Container";
import { PokemonDetail } from "@/components/pokemon/PokemonDetail/PokemonDetail";
import { usePokemonStore } from "@/store/usePokemonStore";
import styles from "./DetailScreen.module.css";

interface DetailScreenProps {
  id: string;
}

export function DetailScreen({ id }: DetailScreenProps) {
  const router = useRouter();
  const pokemon = usePokemonStore((state) => state.getPokemonById(id));

  return (
    <Container className={styles.detail}>
      {pokemon ? (
        <PokemonDetail onBack={() => router.push("/home")} pokemon={pokemon} />
      ) : (
        <EmptyState
          action={<Button onClick={() => router.push("/home")}>Volver al Home</Button>}
          description="El pokemon solicitado no existe o ya no está disponible."
          title="Pokemon no encontrado"
        />
      )}
    </Container>
  );
}
