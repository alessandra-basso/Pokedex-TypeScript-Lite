import { CatalogoPokemon } from "./repositories/PokemonRepositorie.js";
import { buscarPokemon } from "./services/PokeApiService.js";

async function main() {
    const catalogo = new CatalogoPokemon;

    const pikachu = await buscarPokemon("pikachu");
    
    if(pikachu !== null){
        catalogo.adicionar(pikachu);
    }

    const charmander = await buscarPokemon("charmander");

    if (charmander !== null){
        catalogo.adicionar(charmander);
    }

    const pickachuDuplicado = await buscarPokemon("pikachu");

    if(pickachuDuplicado !== null){
        catalogo.adicionar(pickachuDuplicado);
    }

    await buscarPokemon("pokemon-inexistente");
    catalogo.listar();
    catalogo.remover(25);
    catalogo.listar();
}

main();