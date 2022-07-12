import {useContext, useEffect, useState} from "react";
import {PokemonContext} from "../context/PokemonProvider";

const usePokemonApi = () => {
    const {dispatch} = useContext(PokemonContext);
    const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setIsLoading(true);
            const request = await fetch(POKEMON_API, { signal: controller.signal });
            const result = await request.json();

            if(request.ok) {
                const pokemons = await getPokemonsData(result.results);
                dispatch({
                    type: "SET_POKEMONS",
                    payload: {
                        pokemons
                    }
                })
                setIsLoading(false);
            }
        })();

        return () => controller.abort();
    }, []) ;

    const getPokemonsData = async(pokemons) => {
        const promises = pokemons.map(getPokemonData);
        return Promise.all(promises);
    }

    const getPokemonData = async (pokemon) => {
        const request = await fetch(pokemon.url);
        const result = await request.json();
        if(request.ok) {
            return {
                id: result.id,
                name: result.name,
                types: result.types.map(type => type.type.name),
                image: result.sprites.front_default,
                attacks: result.moves.map(attack => attack.move.name),
            };
        }
    }

    return isLoading;
}

export default usePokemonApi;