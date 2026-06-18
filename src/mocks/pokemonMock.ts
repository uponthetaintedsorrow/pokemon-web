// Dataset mock amplio para probar filtros, orden y paginado.
import type { Pokemon } from "@/features/pokemon/pokemonTypes";

const sprite = (id: number): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const pokemonMock: Pokemon[] = [
  { id: "1", name: "Bulbasaur", image: sprite(1), hp: 45, attack: 49, defense: 49, speed: 45, height: 7, weight: 69, types: ["grass", "poison"], origin: "api" },
  { id: "2", name: "Ivysaur", image: sprite(2), hp: 60, attack: 62, defense: 63, speed: 60, height: 10, weight: 130, types: ["grass", "poison"], origin: "api" },
  { id: "3", name: "Venusaur", image: sprite(3), hp: 80, attack: 82, defense: 83, speed: 80, height: 20, weight: 1000, types: ["grass", "poison"], origin: "api" },
  { id: "4", name: "Charmander", image: sprite(4), hp: 39, attack: 52, defense: 43, speed: 65, height: 6, weight: 85, types: ["fire"], origin: "api" },
  { id: "5", name: "Charmeleon", image: sprite(5), hp: 58, attack: 64, defense: 58, speed: 80, height: 11, weight: 190, types: ["fire"], origin: "api" },
  { id: "6", name: "Charizard", image: sprite(6), hp: 78, attack: 84, defense: 78, speed: 100, height: 17, weight: 905, types: ["fire", "flying"], origin: "api" },
  { id: "7", name: "Squirtle", image: sprite(7), hp: 44, attack: 48, defense: 65, speed: 43, height: 5, weight: 90, types: ["water"], origin: "api" },
  { id: "8", name: "Wartortle", image: sprite(8), hp: 59, attack: 63, defense: 80, speed: 58, height: 10, weight: 225, types: ["water"], origin: "api" },
  { id: "9", name: "Blastoise", image: sprite(9), hp: 79, attack: 83, defense: 100, speed: 78, height: 16, weight: 855, types: ["water"], origin: "api" },
  { id: "10", name: "Pikachu", image: sprite(25), hp: 35, attack: 55, defense: 40, speed: 90, height: 4, weight: 60, types: ["electric"], origin: "api" },
  { id: "11", name: "Raichu", image: sprite(26), hp: 60, attack: 90, defense: 55, speed: 110, height: 8, weight: 300, types: ["electric"], origin: "api" },
  { id: "12", name: "Eevee", image: sprite(133), hp: 55, attack: 55, defense: 50, speed: 55, height: 3, weight: 65, types: ["normal"], origin: "api" },
  { id: "13", name: "Snorlax", image: sprite(143), hp: 160, attack: 110, defense: 65, speed: 30, height: 21, weight: 4600, types: ["normal"], origin: "api" },
  { id: "14", name: "Gengar", image: sprite(94), hp: 60, attack: 65, defense: 60, speed: 110, height: 15, weight: 405, types: ["ghost", "poison"], origin: "api" },
  { id: "15", name: "Machamp", image: sprite(68), hp: 90, attack: 130, defense: 80, speed: 55, height: 16, weight: 1300, types: ["fighting"], origin: "api" },
  { id: "16", name: "Onix", image: sprite(95), hp: 35, attack: 45, defense: 160, speed: 70, height: 88, weight: 2100, types: ["rock", "ground"], origin: "api" },
  { id: "17", name: "Lapras", image: sprite(131), hp: 130, attack: 85, defense: 80, speed: 60, height: 25, weight: 2200, types: ["water", "ice"], origin: "api" },
  { id: "18", name: "Dragonite", image: sprite(149), hp: 91, attack: 134, defense: 95, speed: 80, height: 22, weight: 2100, types: ["dragon", "flying"], origin: "api" },
  { id: "19", name: "Scyther", image: sprite(123), hp: 70, attack: 110, defense: 80, speed: 105, height: 15, weight: 560, types: ["bug", "flying"], origin: "api" },
  { id: "20", name: "Jigglypuff", image: sprite(39), hp: 115, attack: 45, defense: 20, speed: 20, height: 5, weight: 55, types: ["fairy", "normal"], origin: "api" },
  { id: "21", name: "Mewtwo", image: sprite(150), hp: 106, attack: 110, defense: 90, speed: 130, height: 20, weight: 1220, types: ["psychic"], origin: "api" },
  { id: "22", name: "Steelix", image: sprite(208), hp: 75, attack: 85, defense: 200, speed: 30, height: 92, weight: 4000, types: ["steel", "ground"], origin: "api" },
  { id: "23", name: "Arcanine", image: sprite(59), hp: 90, attack: 110, defense: 80, speed: 95, height: 19, weight: 1550, types: ["fire"], origin: "api" },
  { id: "24", name: "Gyarados", image: sprite(130), hp: 95, attack: 125, defense: 79, speed: 81, height: 65, weight: 2350, types: ["water", "flying"], origin: "api" },
  { id: "25", name: "Aurorwing", image: sprite(144), hp: 88, attack: 92, defense: 78, speed: 104, height: 18, weight: 600, types: ["ice", "flying"], origin: "created" },
  { id: "26", name: "Thorngeist", image: sprite(71), hp: 72, attack: 98, defense: 88, speed: 67, height: 14, weight: 480, types: ["grass", "ghost"], origin: "created" },
  { id: "27", name: "Voltflare", image: sprite(26), hp: 64, attack: 101, defense: 64, speed: 122, height: 9, weight: 280, types: ["electric", "fire"], origin: "created" },
  { id: "28", name: "Crystalon", image: sprite(134), hp: 102, attack: 88, defense: 112, speed: 48, height: 13, weight: 450, types: ["water", "ice"], origin: "created" },
];
