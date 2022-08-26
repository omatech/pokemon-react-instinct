import SearchFilter from "./List/SearchFilter";
import TypeFilter from "./List/TypeFilter";
import SortFilter from "./List/SortFilter";
import List from "./List/List";
import ListItem from "./List/ListItem";
import Pagination from "./List/Pagination";
import {useContext, useEffect} from "react";
import {PokemonContext} from "../context/PokemonProvider";
import usePokemonApi from "../hooks/usePokemonApi";
import useSortedPokemons from "../hooks/useSortedPokemons";
import usePaginatedPokemons from "../hooks/usePaginatedPokemons";

const PokemonDashboard = () => {
    const {state} = useContext(PokemonContext);
    const isLoading = usePokemonApi();
    const {filteredPokemons} = state;

    //todo
        useSortedPokemons();
    //usePaginatedPokemons();

    return (
        <>
            <SearchFilter />
            <TypeFilter />
            <SortFilter />
            {isLoading
                ? <span className="spinner spinner-slow"></span>
                : <List>
                    {
                        filteredPokemons && filteredPokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                    }
                </List>
            }
            <Pagination />
        </>
    )
}

export default PokemonDashboard;