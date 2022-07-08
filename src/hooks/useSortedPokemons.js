const useSortedPokemons = (pokemons) => {
    const sortedPokemons = pokemons.sort((a, b) => {
        if (a[selectedColumn] > b[selectedColumn]) {
            return selectedSortType === sortTypes[0] ? 1 : -1;
        }
        if (a[selectedColumn] < b[selectedColumn]) {
            return selectedSortType === sortTypes[0] ? -1 : 1;
        }
        return 0;
    });

    return {
        sortedPokemons,
    };
}

export default useSortedPokemons;