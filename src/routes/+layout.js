import pokemons from "$lib/pokemons.json";

export async function load() {
  return { pokemons };
}