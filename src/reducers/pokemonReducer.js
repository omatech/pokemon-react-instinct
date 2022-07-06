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
            console.log(newState);
            newState.types.find(type => type.name === payload.typeName).isSelected = payload.typeIsChecked;
            return newState;
        }
        case "SET_ITEMS_TO_SHOW": {
            const newState = structuredClone(state);
            newState.itemsToShow = payload.itemsToShow;
            return newState;
        }
        default:
            return state;
    }
}