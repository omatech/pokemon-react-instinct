export const pokemonReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_TYPES": {
            const newState = structuredClone(state);
            newState.types = payload.types;
            return newState;
        }
        case "SET_TYPE": {
            const newState = structuredClone(state);
            newState.types.find(type => type.name === payload.typeName).isSelected = payload.typeIsChecked;
            const selectedTypes = newState.types.filter(type => type.isSelected);
            if (!!selectedTypes.length) {
                newState.filteredPokemons = newState.pokemons.filter(pokemon => selectedTypes.some(type => pokemon.types.includes(type.name)))
            } else {
                newState.filteredPokemons = newState.pokemons;
            }
            newState.pagination.selectedPage = 0;
            newState.pagination.pagesNumber = Math.ceil(newState.filteredPokemons.length / newState.pagination.selectedItemsPerPage);
            return newState;
        }
        case "SET_SELECTED_ITEMS_PER_PAGE": {
            const newState = structuredClone(state);
            newState.pagination.selectedItemsPerPage = payload.selectedItemsPerPage;
            newState.pagination.selectedPage = 0;
            newState.pagination.pagesNumber = Math.ceil(newState.filteredPokemons.length / newState.pagination.selectedItemsPerPage);
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
            newState.filteredPokemons = newState.pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(newState.searchValue.toLowerCase())
            );
            newState.pagination.selectedPage = 0;
            newState.pagination.pagesNumber = Math.ceil(newState.filteredPokemons.length / newState.pagination.selectedItemsPerPage);
            return newState;
        }
        case "SET_POKEMONS": {
            const newState = structuredClone(state);
            newState.pokemons = payload.pokemons;
            newState.filteredPokemons = payload.pokemons;
            newState.pagination.selectedPage = 0;
            newState.pagination.pagesNumber = Math.ceil(newState.filteredPokemons.length / newState.pagination.selectedItemsPerPage);
            return newState;
        }/*
        case "SET_FILTERED_POKEMONS": {
            const newState = structuredClone(state);
            newState.filteredPokemons = payload.filteredPokemons;
            newState.pagination.selectedPage = 0;
            newState.pagination.pagesNumber = Math.ceil(newState.filteredPokemons.length / newState.pagination.selectedItemsPerPage);
            return newState;
        }*/
        default:
            return state;
    }
}