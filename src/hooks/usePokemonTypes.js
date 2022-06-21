import {useState} from "react";
import pokemons from "./../api";

const usePokemonTypes = () => {
    const typesList = pokemons.reduce((acc, pokemon) => {
        pokemon.types.map(type => {
            if (!acc.some(({name}) => name === type)) {
                acc.push({name: type, isSelected: false});
            }
        })
        return acc;
    }, []);

    const [types, setTypes] = useState(typesList);
    const selectedTypes = types.filter(type => type.isSelected);
    return [types, setTypes, selectedTypes]
}

export default usePokemonTypes;