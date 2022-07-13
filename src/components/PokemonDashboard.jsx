import SearchFilter from "./List/SearchFilter";
import TypeFilter from "./List/TypeFilter";
import SortFilter from "./List/SortFilter";
import List from "./List/List";
import ListItem from "./List/ListItem";
import Pagination from "./List/Pagination";
import {useContext} from "react";
import {PokemonContext} from "../context/PokemonProvider";
import usePokemonApi from "../hooks/usePokemonApi";
import usePaginatedPokemons from "../hooks/usePaginatedPokemons";
import useSortedPokemons from "../hooks/useSortedPokemons";

const PokemonDashboard = () => {

    const {state} = useContext(PokemonContext);
    const isLoading = usePokemonApi();
    //useSortedPokemons();
    //usePaginatedPokemons();
    const {pokemonsToShow} = state;

    return (
        <>
            <SearchFilter />
            <TypeFilter />
            <SortFilter />
            {isLoading
                ? <span className="spinner spinner-slow"></span>
                : <List>
                    {
                        pokemonsToShow && pokemonsToShow.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                    }
                </List>
            }
            <Pagination />
        </>
    )
}

export default PokemonDashboard;