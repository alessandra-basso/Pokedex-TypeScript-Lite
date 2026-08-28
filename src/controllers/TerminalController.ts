import { buscarPokemon } from "https://github.com/alessandra-basso/Pokedex-TypeScript-Lite/blob/feat/pokedex/src/services/PokeApiService.ts";

async function buscarPokemon(nomeOuId: string): Promise<void> {

try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);

    if(!resposta.ok){
        console.log("[ERRO] Pokémon não encontrado.");
        return null;
    }

    const dados = await resposta.json();
    dados.map((p: any) => p.id);

} catch (erro) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
}
}