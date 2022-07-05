import {useState} from "react";

const usePaginatedPokemons = (pokemons) => {
    const itemsPerPage = [10, 25, 50];
    const [itemsToShow, setItemsToShow] = useState(itemsPerPage[0]);

    const [selectedPage, setSelectedPage] = useState(0);

    const paginatedPokemons = (() => {
        const paginateFilteredPokemon = [];
        for (let i = 0; i < pokemons.length; i += itemsToShow) {
            paginateFilteredPokemon.push(pokemons.slice(i, i + itemsToShow));
        }
        return paginateFilteredPokemon;
    })();

    const pagesNumber = paginatedPokemons.length;

    return {
        selectedPage,
        setSelectedPage,
        pagesNumber,
        itemsToShow,
        setItemsToShow,
        itemsPerPage,
        pokemonsInPage: paginatedPokemons[selectedPage]
    }
}

export default usePaginatedPokemons;