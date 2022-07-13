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
                newState.pokemonsToShow = newState.pokemons.filter(pokemon => selectedTypes.some(type => pokemon.types.includes(type.name)))
            } else {
                newState.pokemonsToShow = newState.pokemons;
            }
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
            newState.pokemonsToShow = newState.pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(newState.searchValue.toLowerCase())
            );
            return newState;
        }
        default:
            return state;
    }
}