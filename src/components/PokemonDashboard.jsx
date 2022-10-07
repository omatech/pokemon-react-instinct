import SearchFilter from "./SearchFilter";
import TypeFilter from "./TypeFilter";
import SortFilter from "./SortFilter";
import List from "./List/List";
import ListItem from "./List/ListItem";
import Pagination from "./Pagination";
import {useContext, useState} from "react";
import {PokemonContext} from "../context/PokemonProvider";
import usePokemonApi from "../hooks/usePokemonApi";
import PokemonDetailModal from "./Modal/Modal";

const PokemonDashboard = () => {
    const {state} = useContext(PokemonContext);
    const isLoading = usePokemonApi();
    const {filteredPokemons} = state;
    const {pagination} = state;
    const {selectedItemsPerPage, selectedPage} = pagination;
    const {dispatch} = useContext(PokemonContext)

    const [showModal, setShowModal] = useState(false)

    const openModal = pokemonId => {
        dispatch({
            type: "SET_SELECTED_POKEMON_ID",
            payload: {selectedPokemonId: pokemonId}
        });
        setShowModal(!showModal)
    }

    const closeModal = () => {
        setShowModal(!showModal)
    }

    const pokemonsInPage = filteredPokemons.slice(selectedPage * selectedItemsPerPage, selectedPage * selectedItemsPerPage + selectedItemsPerPage)

    return (
        <>
            <SearchFilter />
            <TypeFilter />
            <SortFilter />
            {isLoading
                ? <span className="spinner spinner-slow"></span>
                : <>
                    <List>
                    {
                        pokemonsInPage.length ? pokemonsInPage.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} openModal={openModal} />): <p>No pokemons to show :( </p>
                    }
                    </List>
                    <PokemonDetailModal showModal={showModal} closeModal={closeModal} />
                </>
            }
            <Pagination />
        </>
    )
}

export default PokemonDashboard;
