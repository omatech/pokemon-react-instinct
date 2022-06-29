import {useEffect, useState} from "react";

const usePokemonApi = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=151";

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setIsLoading(true);
            const request = await fetch(POKEMON_API, { signal: controller.signal });
            const result = await request.json();
            let pokemons = [];
            if(request.ok) {
                pokemons = await getPokemonsData(result.results);
                setPokemons(pokemons);
                setIsLoading(false);
            }
        })();

        /*return () => controller.abort();*/
    }, []);

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

    return {pokemons, isLoading};
}

export default usePokemonApi;