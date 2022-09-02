import SearchFilter from "./List/SearchFilter";
import TypeFilter from "./List/TypeFilter";
import SortFilter from "./List/SortFilter";
import List from "./List/List";
import ListItem from "./List/ListItem";
import Pagination from "./List/Pagination";
import {useContext} from "react";
import {PokemonContext} from "../context/PokemonProvider";
import usePokemonApi from "../hooks/usePokemonApi";

const PokemonDashboard = () => {
    const {state} = useContext(PokemonContext);
    const isLoading = usePokemonApi();
    const {filteredPokemons} = state;
    const {pagination} = state;
    const {selectedItemsPerPage, selectedPage} = pagination;

    const pokemonsInPage = filteredPokemons.slice(selectedPage * selectedItemsPerPage, selectedPage * selectedItemsPerPage + selectedItemsPerPage)

    return (
        <>
            <SearchFilter />
            <TypeFilter />
            <SortFilter />
            {isLoading
                ? <span className="spinner spinner-slow"></span>
                : <List>
                    {
                        pokemonsInPage && pokemonsInPage.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                    }
                </List>
            }
            <Pagination />
        </>
    )
}

export default PokemonDashboard;