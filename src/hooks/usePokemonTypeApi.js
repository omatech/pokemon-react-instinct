import {useEffect, useReducer} from "react";
import { pokemonReducer } from "../reducers/pokemonReducer";

const usePokemonTypeApi = () => {
    const [state, dispatch] = useReducer(pokemonReducer, {
        types: [],
        isLoading: true,
        itemsToShow: 10,
    });
    const POKEMON_TYPES_API = "https://pokeapi.co/api/v2/type";
    const types = state.types;

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            const request = await fetch(POKEMON_TYPES_API, { signal: controller.signal });
            const result = await request.json();
            let types = [];
            if(request.ok) {
                types = result.results.map(type => {
                    return { name: type.name, isSelected: false };
                })
            }
            dispatch({
                type: 'SET_TYPES',
                payload: {
                    types
                }
            });
        })();

       /* return () => controller.abort();*/
    }, []);

    const selectedTypes = types.filter(type => type.isSelected);

    return {
        state,
        dispatch,
        selectedTypes
    };
}

export default usePokemonTypeApi;
