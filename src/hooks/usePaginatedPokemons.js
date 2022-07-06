import {useState, useReducer} from "react";
import { pokemonReducer } from "../reducers/pokemonReducer";

const usePaginatedPokemons = ({pokemons, state, dispatch}) => {
    const itemsPerPage = [10, 25, 50];
    const {itemsToShow} = state;

    const [selectedPage, setSelectedPage] = useState(0);

    const paginatedPokemons = (() => {
        const paginateFilteredPokemon = [];
        for (let i = 0; i < pokemons.length; i += itemsToShow) {
            paginateFilteredPokemon.push(pokemons.slice(i, i + itemsToShow));
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