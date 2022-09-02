export const pokemonReducer = (state, {type, payload}) => {
    switch (type) {
        case "SET_TYPES": {
            const newState = structuredClone(state);
            newState.types = payload.types;
            return setPokemonsToShow(newState);
            return newState;
        }
        case "SET_TYPE": {
            const newState = structuredClone(state);
            newState.types.find(type => type.name === payload.typeName).isSelected = payload.typeIsChecked;
            return setPokemonsToShow(newState);
            return newState;
        }
        case "SET_SELECTED_ITEMS_PER_PAGE": {
            const newState = structuredClone(state);
            newState.pagination.selectedItemsPerPage = payload.selectedItemsPerPage;
            return newState;
        }
        case "SET_SELECTED_PAGE": {
            const newState = structuredClone(state);
            newState.pagination.selectedPage = payload.selectedPage;
            return newState;
        }
        case "SET_SELECTED_COLUMN": {
            const newState = structuredClone(state);
            newState.sortFilter.selectedColumn = payload.selectedColumn;
            return setPokemonsToShow(newState);
            return newState;
        }
        case "SET_SELECTED_SORT_TYPE": {
            const newState = structuredClone(state);
            newState.sortFilter.selectedSortType = payload.selectedSortType;
            return newState;
        }
        case "SET_SEARCH_VALUE": {
            const newState = structuredClone(state);
            newState.searchValue = payload.searchValue;
            return setPokemonsToShow(newState);
            return newState;
        }
        case "SET_POKEMONS": {
            const newState = structuredClone(state);
            newState.pokemons = payload.pokemons;
            newState.filteredPokemons = payload.pokemons;
            return setPokemonsToShow(newState);
            return newState;
        }

        case "SET_SORTED_POKEMONS": {
            const newState = structuredClone(state);
            const {selectedColumn, selectedSortType, sortTypes} = newState.sortFilter;
            newState.filteredPokemons.sort((a, b) => {
                if (a[selectedColumn] > b[selectedColumn]) {
                    return selectedSortType === sortTypes[0] ? 1 : -1;
                }
                if (a[selectedColumn] < b[selectedColumn]) {
                    return selectedSortType === sortTypes[0] ? -1 : 1;
                }
                return 0;
            });
            return newState;
        }

        default:
            return state;
    }
}

const setPokemonsToShow = state => {
    const newState = structuredClone(state);
    const selectedTypes = newState.types.filter(type => type.isSelected);

    newState.filteredPokemons = newState.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(newState.searchValue.toLowerCase()))

    if (!!selectedTypes.length) {
        newState.filteredPokemons = newState.filteredPokemons.filter(pokemon => selectedTypes.some(type => pokemon.types.includes(type.name)))
    }

    newState.pagination.selectedPage = 0;
    newState.pagination.pagesNumber = Math.ceil(newState.filteredPokemons.length / newState.pagination.selectedItemsPerPage);
    return newState;
}