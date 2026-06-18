// Lista compacta de tipos para cards y detail.
import { Badge } from "@/components/primitives/Badge/Badge";
import type { PokemonTypeName } from "@/features/pokemon/pokemonTypes";
import styles from "./TypeBadgeList.module.css";

interface TypeBadgeListProps {
  types: PokemonTypeName[];
}

export function TypeBadgeList({ types }: TypeBadgeListProps) {
  return (
    <div className={styles.types} aria-label="Tipos del pokemon">
      {types.map((type) => (
        <Badge key={type} tone="primary">
          {type}
        </Badge>
      ))}
    </div>
  );
}
