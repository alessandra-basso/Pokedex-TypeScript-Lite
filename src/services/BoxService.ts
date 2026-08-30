import { type PokemonResumo } from "../models/pokemon.js";
import { CatalogoPokemon } from "../repositories/PokemonRepositorie.js";

export function adicionarAoCatalogo(
  catalogo: PokemonResumo[],
  pokemon: PokemonResumo,
): PokemonResumo[] {
    const novoPokemon = new CatalogoPokemon;

    novoPokemon.adicionar(pokemon);
    return catalogo;
    
}