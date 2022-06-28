import {useEffect, useState} from "react";

const usePokemonTypeApi = () => {
    const [types, setTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const POKEMON_TYPES_API = "https://pokeapi.co/api/v2/type";

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setIsLoading(true);
            const request = await fetch(POKEMON_TYPES_API, { signal: controller.signal });
            const result = await request.json();
            let types = [];
            if(request.ok) {
                console.log(result)
                types = result.results.map(type => {
                    return { name: type.name, isSelected: false };
                })
            }
            setIsLoading(false);
            setTypes(types);
        })();

        return () => controller.abort();
    }, []);

    const selectedTypes = types.filter(type => type.isSelected);

    return [types, setTypes, selectedTypes, isLoading];
}

export default usePokemonTypeApi;