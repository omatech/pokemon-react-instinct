import {useEffect, useState} from "react";

const usePokemonTypeApi = () => {
    const [types, setTypes] = useState([]);
    const [isLoadingTypes, setIsLoadingTypes] = useState(true);
    const POKEMON_TYPES_API = "https://pokeapi.co/api/v2/type";

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setIsLoadingTypes(true);
            const request = await fetch(POKEMON_TYPES_API, { signal: controller.signal });
            const result = await request.json();
            let types = [];
            if(request.ok) {
                types = result.results.map(type => {
                    return { name: type.name, isSelected: false };
                })
            }
            setIsLoadingTypes(false);
            setTypes(types);
        })();

       /* return () => controller.abort();*/
    }, []);

    const selectedTypes = types.filter(type => type.isSelected);

    return {
        types,
        isLoadingTypes,
        setTypes,
        selectedTypes
    };
}

export default usePokemonTypeApi;