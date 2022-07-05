import { createContext } from 'react';

export const PokemonContext = createContext();

const PokemonProvider = ({pokemonsData, children}) => {
    const {
        pokemons,
        isLoading,
        typeFilter,
        searchFilter,
        sortFilter,
        pagination,
    } = pokemonsData;

    return <PokemonContext.Provider value={{
        pokemons,
        isLoading,
        typeFilter,
        searchFilter,
        sortFilter,
        pagination,
    }}>
        { children }
    </PokemonContext.Provider>
}

export default PokemonProvider;