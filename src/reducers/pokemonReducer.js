export const pokemonReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_TYPES": {
            const newState = structuredClone(state);
            newState.types = payload.types;
            newState.isLoading = false;
            return newState;
        }
        case "SET_SELECTED_TYPES": {
            const newState = structuredClone(state);
            newState.types.find(type => type.name === payload.typeName).isSelected = payload.typeIsChecked;
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
            return newState;
        }
        default:
            return state;
    }
}