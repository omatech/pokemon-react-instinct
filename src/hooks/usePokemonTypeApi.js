import {useContext, useEffect, useState} from "react";
import {PokemonContext} from "../context/PokemonProvider";

const POKEMON_TYPES_API = "https://pokeapi.co/api/v2/type";

const usePokemonTypeApi = () => {

    const {dispatch} = useContext(PokemonContext)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setIsLoading(true);
            const request = await fetch(POKEMON_TYPES_API, {signal: controller.signal});
            const result = await request.json();
            if (request.ok) {
                const types = result.results.map(type => ({name: type.name, isSelected: false}))
                dispatch({
                    type: "SET_TYPES",
                    payload: {
                        types
                    }
                });
                setIsLoading(false);
            }
        })();
        return () => controller.abort();
    }, []);

    return isLoading;
};

export default usePokemonTypeApi;
