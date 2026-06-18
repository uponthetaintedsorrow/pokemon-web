// Tarjeta enlazable con resumen de pokemon para Home.
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/primitives/Badge/Badge";
import { Card } from "@/components/primitives/Card/Card";
import type { Pokemon } from "@/features/pokemon/pokemonTypes";
import { TypeBadgeList } from "../TypeBadgeList/TypeBadgeList";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link className={styles.link} href={`/pokemon/${pokemon.id}`}>
      <Card className={styles.card}>
        <Image alt={pokemon.name} className={styles.image} height={256} src={pokemon.image} unoptimized width={256} />
        <div className={styles.content}>
          <div className={styles.header}>
            <h3>{pokemon.name}</h3>
            <Badge tone={pokemon.origin === "created" ? "secondary" : "muted"}>{pokemon.origin}</Badge>
          </div>
          <TypeBadgeList types={pokemon.types} />
          <div className={styles.footer}>
            <span>Ataque</span>
            <strong>{pokemon.attack}</strong>
          </div>
        </div>
      </Card>
    </Link>
  );
}
