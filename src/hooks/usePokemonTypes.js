import {useState} from 'react'
import pokemons from "./../api"

const usePokemonTypes = () => {
    const typesList = pokemons.reduce((acc, pokemon) => {
        pokemon.types.map(type => {
            if (!acc.includes(({name}) => name === type)) {
                acc.push({name: type, isSelected: false});
            }
        })
        return acc;
    }, []);

    console.log(typesList);

    const initialTypes = [
        {name: 'Agua', isSelected: false},
        {name: 'Bicho', isSelected: false},
        {name: 'Fuego', isSelected: false},
        {name: 'Planta', isSelected: false},
        {name: 'Veneno', isSelected: false},
    ];
    const [types, setTypes] = useState(initialTypes);
    const selectedTypes = types.filter(type => type.isSelected);
    return [types, setTypes, selectedTypes]
}

export default usePokemonTypes;