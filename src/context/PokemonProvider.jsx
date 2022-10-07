import {createContext, useReducer} from "react";
import {pokemonReducer} from "../reducers/pokemonReducer";

export const PokemonContext = createContext();

const PokemonProvider = ({children}) => {
    const columns = ["id", "name"];
    const sortTypes = ["asc", "desc"];
    const itemsPerPage = [10, 25, 50];

    const [state, dispatch] = useReducer(pokemonReducer, {
        pokemons: [],
        filteredPokemons: [],
        selectedPokemonId: 0,
        types: [],
        searchValue: "",
        pagination: {
            selectedPage: 0,
            pagesNumber: 0,
            itemsPerPage,
            selectedItemsPerPage: itemsPerPage[0]
        },
        sortFilter: {
            columns,
            selectedColumn: columns[0],
            sortTypes,
            selectedSortType: sortTypes[0]
        }
    });

    return <PokemonContext.Provider value={{state, dispatch}}>
        { children }
    </PokemonContext.Provider>
}

export default PokemonProvider;