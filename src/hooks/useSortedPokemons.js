import {useState} from "react";

const useSortedPokemons = (pokemons) => {
    const columns = ["id", "name"];
    const sortTypes = ["none", "asc", "desc"];
    const [columnsState, setColumnsState] = useState(columns.map(column => ({column, sortType: sortTypes[0]})));

    const getSelectedColumn = () => {
        return columnsState.find(columnState => columnState.sortType !== sortTypes[0]);
    }

    const selectedColumn = getSelectedColumn();

    const sortedPokemons = pokemons.sort((a, b) => {
        if (a[selectedColumn] > b[selectedColumn]) {
            return 1;
        }
        if (a[selectedColumn] < b[selectedColumn]) {
            return -1;
        }
        return 0;
    });

    return {
        sorting: {
            columns,
            sortTypes,
            columnsState,
            setColumnsState
        },
        sortedPokemons,
    };
}

export default useSortedPokemons;