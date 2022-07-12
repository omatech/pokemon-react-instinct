import {PokemonContext} from "../context/PokemonProvider";
import {useContext} from "react";

const useSortedPokemons = () => {

    const {state, dispatch} = useContext(PokemonContext);

    const sortedPokemons = state.pokemons.sort((a, b) => {
        if (a[selectedColumn] > b[selectedColumn]) {
            return selectedSortType === sortTypes[0] ? 1 : -1;
        }
        if (a[selectedColumn] < b[selectedColumn]) {
            return selectedSortType === sortTypes[0] ? -1 : 1;
        }
        return 0;
    });

    dispatch({
        type: "SET_POKEMONS_TO_SHOW",
        payload: {
            pokemonsToShow: sortedPokemons
        }
    });
}

export default useSortedPokemons;