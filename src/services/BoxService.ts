import { type PokemonResumo } from "../models/pokemon.js";

function adicionarAoCatalogo(
  catalogo: PokemonResumo[],
  pokemon: PokemonResumo,
): PokemonResumo[] {
    const jaExiste = catalogo.some((p) => p.id === pokemon.id);

    if(!jaExiste){
        catalogo.push(pokemon);
        console.log(`${pokemon.nome} adicionado ao catálogo.`);
    } else {
        console.error(`${pokemon.nome} já está no catálogo.`);
    }

    return catalogo;
}
