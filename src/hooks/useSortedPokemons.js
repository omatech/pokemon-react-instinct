import {useState} from "react";

const useSortedPokemons = (pokemons) => {
    const columns = ["id", "name"];
    const sortTypes = ["asc", "desc"];

    const [selectedColumn, setSelectedColumn] = useState(columns[0]);
    const [selectedSortType, setSelectedSortType] = useState(sortTypes[0]);

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
            selectedColumn,
            setSelectedColumn,
            sortTypes,
            selectedSortType,
            setSelectedSortType
        },
        sortedPokemons,
    };
}

export default useSortedPokemons;