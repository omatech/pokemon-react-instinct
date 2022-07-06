import {useState} from "react";
import usePokemonTypeApi from "./usePokemonTypeApi";
import useFilteredPokemons from "./useFilteredPokemons";
import usePaginatedPokemons from "./usePaginatedPokemons";
import useSortedPokemons from "./useSortedPokemons";
import usePokemonApi from "./usePokemonApi";

const usePokemons = () => {
    const {state, dispatch, selectedTypes} = usePokemonTypeApi();
    const {pokemons, isLoading} = usePokemonApi();
    const [searchValue, setSearchValue] = useState("");
    const {filteredPokemons} = useFilteredPokemons({selectedTypes, searchValue, pokemons});
    const {sortedPokemons, ...sortFilter} = useSortedPokemons(filteredPokemons);
    const {pokemonsInPage, ...pagination} = usePaginatedPokemons({pokemons: sortedPokemons, state, dispatch});

    return {
        pokemons: pokemonsInPage,
        isLoading,
        typeFilter: {state, dispatch},
        searchFilter: {setSearchValue},
        sortFilter,
        pagination,
    };
}

export default usePokemons;