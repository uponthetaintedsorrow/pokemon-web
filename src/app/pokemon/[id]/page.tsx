// Ruta dinámica para mostrar el detalle de un pokemon.
import { DetailScreen } from "@/screens/DetailScreen";

interface PokemonPageProps {
  params: { id: string };
}

export default function Page({ params }: PokemonPageProps) {
  return <DetailScreen id={params.id} />;
}
