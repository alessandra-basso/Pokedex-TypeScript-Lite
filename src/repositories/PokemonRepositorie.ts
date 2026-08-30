import type { PokemonResumo } from "../models/pokemon.js";

export let catalogo: PokemonResumo[] = [];

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        const jaExiste = this.pokemons.some((item) => item.id === pokemon.id)
    

        if(jaExiste){
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }

    listar(): void {
        if(this.pokemons.length > 0){
        console.log("\n ===CATÁLOGO ATUAL ===");

            this.pokemons.forEach((p) => {
                console.log(`${p.id} - ${p.nome} | Tipos: ${p.tipos} 
                    | Altura: ${p.altura} | Peso: ${p.peso}`);
            })

        } else {
            console.log("[AVISO] Catálogo vazio.");
        }
    }

    remover(id:number){
        const existe =  this.pokemons.some((p) => p.id === id);

        if(!existe) {
            console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
            return;
        }

        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
        console.log("[OK] Pokémon removido do catálogo.");
    }
}
