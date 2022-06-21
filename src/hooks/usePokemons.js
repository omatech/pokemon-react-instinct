import {useState} from "react";
import usePokemonTypes from "./usePokemonTypes";
import useFilteredPokemons from "./useFilteredPokemons";
import usePaginatedPokemons from "./usePaginatedPokemons";

const usePokemons = () => {
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const [searchValue, setSearchValue] = useState("");
    const filteredPokemons = useFilteredPokemons({selectedTypes, searchValue});
    const {pagination, paginationLength, pokemonsInPage} = usePaginatedPokemons(filteredPokemons);
    return [types, setTypes, setSearchValue, pagination, paginationLength, pokemonsInPage];
}

export default usePokemons;