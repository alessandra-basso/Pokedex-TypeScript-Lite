import type { PokemonResumo, PokemonApiResponse } from "../models/pokemon.js";
import { CatalogoPokemon } from "../repositories/PokemonRepositorie.js";
import { APIError } from "../models/CustomErrors.js";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const parametro = nomeOuId.trim().toLowerCase();

  if (!parametro) {
    throw new APIError("Nome ou ID inválido.", 400);
  }

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);

    if (!resposta.ok) {
      if(resposta.status === 404){
      throw new APIError(`Pokémon ${parametro} não foi encontrado.`, 404);
    }
      throw new APIError("Falha na comunicação com a PokéAPI.", resposta.status);
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

    throw new APIError("[ERRO] Falha ao conectar com a API.", 500);
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