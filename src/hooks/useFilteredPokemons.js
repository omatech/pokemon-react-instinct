import {useContext} from "react";
import {PokemonContext} from "../context/PokemonProvider";

const useFilteredPokemons = () => {

    const {state, dispatch} = useContext(PokemonContext);
    const {searchValue, pokemons, types} = state;
    const selectedTypes = types.filter(type => type.isSelected);

    let pokemonsToShow = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (!!selectedTypes.length) {
        pokemonsToShow = pokemonsToShow.filter(pokemon => selectedTypes.some(type => pokemon.types.includes(type.name)))
    }

    dispatch({
        type: "SET_POKEMONS_TO_SHOW",
        payload: {
            pokemonsToShow
        }
    })
}

export default useFilteredPokemons;