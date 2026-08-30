import type { PokemonResumo, PokemonApiResponse } from "../models/pokemon.js";
import { CatalogoPokemon } from "../repositories/PokemonRepositorie.js";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const parametro = nomeOuId.trim().toLowerCase();

  if (!parametro) {
    console.error("Nome ou ID inválido.");
    return null;
  }

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);

    if (!resposta.ok) {
      console.error(`Pokémon ${parametro} não foi encontrado.`);
      return null;
    }

    const data = (await resposta.json()) as PokemonApiResponse;

    const pokemonEncontrado: PokemonResumo = {
      id: data.id,
      nome: data.name,
      tipos: data.types.map((t) => t.type.name),
      altura: data.height,
      peso: data.weight,
    };

    return pokemonEncontrado;

  } catch (error) {
    console.error("[ERRO] Falha ao conectar com a API.", error);
    return null;
  }
}

export function listarCatalogo(catalogo: PokemonResumo[]): void {
    const listagem = new CatalogoPokemon;

    listagem.listar();
}

export function removerDoCatalogo( catalogo: PokemonResumo[], id: number): PokemonResumo[]{
    const removerPokemon = new CatalogoPokemon;

    removerPokemon.remover(id);

    return catalogo;

}