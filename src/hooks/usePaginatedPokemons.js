import {useState, useReducer, useContext} from "react";
import { pokemonReducer } from "../reducers/pokemonReducer";
import {PokemonContext} from "../context/PokemonProvider";

const usePaginatedPokemons = () => {

    const {state, dispatch} = useContext(PokemonContext)
    const {pagination, pokemons} = state;
    const {selectedItemsPerPage, selectedPage} = pagination;

    const paginatedPokemons = (() => {
        const paginateFilteredPokemon = [];
        for (let i = 0; i < pokemons.length; i += selectedItemsPerPage) {
            paginateFilteredPokemon.push(pokemons.slice(i, i + selectedItemsPerPage));
        }
        return paginateFilteredPokemon;
    })();

    dispatch({
        type: "SET_POKEMONS_TO_SHOW",
        payload: {
            pokemonsToShow: paginatedPokemons[selectedPage]
        }
    });
    dispatch({
        type: "SET_PAGES_NUMBER",
        payload: {
            pagesNumber: paginatedPokemons.length
        }
    });

};

export default usePaginatedPokemons;