import {useState} from "react";
import usePokemonTypeApi from "./usePokemonTypeApi";
import useFilteredPokemons from "./useFilteredPokemons";
import usePaginatedPokemons from "./usePaginatedPokemons";
import useSortedPokemons from "./useSortedPokemons";

const usePokemons = () => {
    const [types, setTypes, selectedTypes] = usePokemonTypeApi();
    const [searchValue, setSearchValue] = useState("");
    const filteredPokemons = useFilteredPokemons({selectedTypes, searchValue});
    const {sortedPokemons, sorting } = useSortedPokemons(filteredPokemons);
    const {pagination, paginationLength, pokemonsInPage} = usePaginatedPokemons(sortedPokemons);
    return [types, setTypes, setSearchValue, pagination, paginationLength, pokemonsInPage, sorting];
}

export default usePokemons;