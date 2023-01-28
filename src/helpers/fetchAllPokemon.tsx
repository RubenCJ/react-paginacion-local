import { pokemonApi } from "../api/pokemonApi"
import { Pokemon, PokemonResponse, SmallPokemon } from "../interfaces/pokemonResponse";

export const fecthAllPokemon = async(): Promise<Pokemon[]> => {

    const resp = await pokemonApi.get<PokemonResponse>('/pokemon?limit=1500');

    return transformfomPokemon(resp.data.results);

}


const transformfomPokemon = ( smallPokemonList : SmallPokemon[]): Pokemon[] => {
 
    const pokemonList: Pokemon[] = smallPokemonList.map( p => {

        const id  = p.url.split('/')[6];
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;     

        return {
            id,
            name: p.name,
            pic
        }
    })

    return pokemonList;
}
