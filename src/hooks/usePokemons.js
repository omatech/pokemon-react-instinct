import {useState} from "react";
import usePokemonTypes from "./usePokemonTypes";
import useFilteredPokemons from "./useFilteredPokemons";

const usePokemons = () => {
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const [searchValue, setSearchValue] = useState("");
    const filteredPokemons = useFilteredPokemons({selectedTypes, searchValue});
    return [types, setTypes, setSearchValue, filteredPokemons];
}

export default usePokemons;