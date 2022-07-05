import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const RadioGroup = ({value, name, onChange, isChecked}) => <label>
    <input onChange={onChange}
           type="radio"
           name={name}
           value={value}
           checked={isChecked}
    />
    <span>{value}</span>
</label>

const SortFilter = () => {
    const {sortFilter} = useContext(PokemonContext);

    const {
        columns,
        selectedColumn,
        setSelectedColumn,
        sortTypes,
        selectedSortType,
        setSelectedSortType
    } = sortFilter;

    return (
        <div>
            {columns.map(column => <RadioGroup
                key={column}
                value={column}
                name="columns"
                onChange={(e) => setSelectedColumn(e.target.value)}
                isChecked={column === selectedColumn}
            />
            )}
            <br />
            {sortTypes.map(sortType => <RadioGroup
                key={sortType}
                value={sortType}
                name="sortTypes"
                onChange={(e) => setSelectedSortType(e.target.value)}
                isChecked={sortType === selectedSortType}
            />)}
        </div>
    );
}

export default SortFilter;