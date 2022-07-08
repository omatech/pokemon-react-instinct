import {useEffect} from "react";

const usePokemonTypeApi = () => {
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
        })();

       /* return () => controller.abort();*/
    }, []);

    const selectedTypes = types.filter(type => type.isSelected);

    return {
        selectedTypes
    };
}

export default usePokemonTypeApi;
