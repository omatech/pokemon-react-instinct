import {useState} from "react";

const useSortedPokemons = (pokemons) => {
    const columns = ["id", "name"];
    const sortTypes = ["asc", "desc"];

    const [selectedColumn, setSelectedColumn] = useState(columns[0]);
    const [selectedSortType, setSelectedSortType] = useState(sortTypes[0]);

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
        columns,
        selectedColumn,
        setSelectedColumn,
        sortTypes,
        selectedSortType,
        setSelectedSortType,
        sortedPokemons,
    };
}

export default useSortedPokemons;