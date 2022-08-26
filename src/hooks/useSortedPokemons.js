import {PokemonContext} from "../context/PokemonProvider";
import {useContext} from "react";

const useSortedPokemons = () => {

    const {state, dispatch} = useContext(PokemonContext);
    const {selectedColumn, selectedSortType, sortTypes} = state.sortFilter;

    const sortedPokemons = state.pokemons.sort((a, b) => {
        if (a[selectedColumn] > b[selectedColumn]) {
            return selectedSortType === sortTypes[0] ? 1 : -1;
        }
        if (a[selectedColumn] < b[selectedColumn]) {
            return selectedSortType === sortTypes[0] ? -1 : 1;
        }
        return 0;
    });

    console.log('set filtered pok')
    dispatch({
        type: "SET_FILTERED_POKEMONS",
        payload: {
            filteredPokemons: sortedPokemons
        }
    });
}

export default useSortedPokemons;