import {useState} from "react";
import usePokemonTypeApi from "./usePokemonTypeApi";
import useFilteredPokemons from "./useFilteredPokemons";
import usePaginatedPokemons from "./usePaginatedPokemons";
import useSortedPokemons from "./useSortedPokemons";
import usePokemonApi from "./usePokemonApi";

const usePokemons = () => {
    const {types, isLoadingTypes, setTypes, selectedTypes} = usePokemonTypeApi();
    const {pokemons, isLoading} = usePokemonApi();
    const [searchValue, setSearchValue] = useState("");
    const {filteredPokemons} = useFilteredPokemons({selectedTypes, searchValue, pokemons});
    const {sorting, sortedPokemons } = useSortedPokemons(filteredPokemons);
    const {pagination, paginationLength, pokemonsInPage} = usePaginatedPokemons(sortedPokemons);
    return {
        types, isLoadingTypes, setTypes, isLoading, setSearchValue, sorting, pagination, paginationLength, pokemonsInPage
    };
}

export default usePokemons;