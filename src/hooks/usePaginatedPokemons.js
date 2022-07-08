import {useState, useReducer} from "react";
import { pokemonReducer } from "../reducers/pokemonReducer";

const usePaginatedPokemons = ({pokemons, state, dispatch}) => {

    const {selectedItemsPerPage} = state;

    const [selectedPage, setSelectedPage] = useState(0);

    const paginatedPokemons = (() => {
        const paginateFilteredPokemon = [];
        for (let i = 0; i < pokemons.length; i += selectedItemsPerPage) {
            paginateFilteredPokemon.push(pokemons.slice(i, i + selectedItemsPerPage));
        }
        return paginateFilteredPokemon;
    })();

    const pagesNumber = paginatedPokemons.length;

    return {
        selectedPage,
        setSelectedPage,
        pagesNumber,
        itemsPerPage,
        pokemonsInPage: paginatedPokemons[selectedPage]
    }
}

export default usePaginatedPokemons;