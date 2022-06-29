const useFilteredPokemons = ({selectedTypes, searchValue, pokemons}) => {
    let filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (!!selectedTypes.length) {
        filteredPokemons = filteredPokemons.filter(pokemon => selectedTypes.some(type => pokemon.types.includes(type.name)))
    }

    return {filteredPokemons}
}

export default useFilteredPokemons;