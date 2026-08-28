import type { PokemonResumo } from "../models/Pokemon.js";

async function buscarPokemon (nomeOuId: string): Promise <PokemonResumo | null> {
    const pokemon = nomeOuId;
    await fetch("https://pokeapi.co/api/v2/pokemon/{nome-ou-id}");

    if(!nomeOuId){
        return console.error("Pokemon não encontrado");
        
    } else if(nomeOuId === ""){
        return null;
    } else {
        const pokemonEncontrado : PokemonResumo = {
            id:number;
            nome: string;
            tipos: string [];
            altura: number;
            peso: number;
        }
    }

};