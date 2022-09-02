import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const RadioGroup = ({value, name, onChange, isChecked}) => <label>
    <input
        onChange={onChange}
       type="radio"
       name={name}
       value={value}
       checked={isChecked}
    />
    <span>{value}</span>
</label>

const SortFilter = () => {
    const {state, dispatch} = useContext(PokemonContext);
    const {sortFilter} = state;

    const {
        columns,
        selectedColumn,
        sortTypes,
        selectedSortType,
    } = sortFilter;

    const setSortedPokemons = () => {
        dispatch({
            type: "SET_SORTED_POKEMONS"
        });
    }

    return (
        <div>
            {columns.map(column => <RadioGroup
                key={column}
                value={column}
                name="columns"
                onChange={(e) => {
                    dispatch({
                        type: "SET_SELECTED_COLUMN",
                        payload: { selectedColumn: e.target.value }
                    })
                    setSortedPokemons()
                }}
                isChecked={column === selectedColumn}
            />
            )}
            <br />
            {sortTypes.map(sortType => <RadioGroup
                key={sortType}
                value={sortType}
                name="sortTypes"
                onChange={(e) => {
                    dispatch({
                        type: "SET_SELECTED_SORT_TYPE",
                        payload: { selectedSortType: e.target.value }
                    })
                    setSortedPokemons()
                }}
                isChecked={sortType === selectedSortType}
            />)}
        </div>
    );
}

export default SortFilter;