import { useEffect, useState } from "react";
import { fecthAllPokemon } from "../helpers/fetchAllPokemon";
import { Pokemon } from "../interfaces/pokemonResponse";

export const usePokemon = () => {
 
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() => {
          fecthAllPokemon()
          .then( pokemons => {
                setLoading(false);
                setPokemons(pokemons);

          });      
    }, [])    

    return {
        loading,
        pokemons
    }
}
