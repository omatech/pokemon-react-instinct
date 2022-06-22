const SortFilter = ({sorting}) => {
    const {columns, sortTypes, columnsState, setColumnsState} = sorting;

    const onChangeHandler = ({column, sortType}) => {
        setColumnsState((state) => {
            const newState = structuredClone(state);
            newState.map(columnState => {
                columnState.sortType = sortTypes[0];
                return columnState
            });
            newState.find(columnState => columnState.column === column).sortType = sortType;
            return newState;
        });
    }

    const isSortColumnChecked = ({sortType, column}) => {
        return !!columnsState.find(columnState => columnState.column === column && columnState.sortType === sortType);
    }


    return (
        <>
            {columns.map(column => (
                sortTypes.map(sortType => (
                    <label key={`${sortType}-${column}`}>
                        <span>{sortType}-{column}</span>
                        <input onChange={() => onChangeHandler({column, sortType})}
                               type="radio"
                               name="sortColumn"
                               value={`${sortType}-${column}`}
                               checked={isSortColumnChecked({sortType, column})}
                        />
                    </label>
                ))/*
                <>
                    <label key={`desc-${column}`}>
                        <span>{column}</span>
                        <input onChange={onChangeHandler} type="radio" name="sortColumn" value={`desc-${column}`} checked={selectedColumn === column}/>
                    </label>
                    <label key={`asc-${column}`}>
                        <span>{column}</span>
                        <input onChange={onChangeHandler} type="radio" name="sortColumn" value={`asc-${column}`} checked={selectedColumn === column}/>
                    </label>
                    <label key={`asc-${column}`}>
                        <span>{column}</span>
                        <input onChange={onChangeHandler} type="radio" name="sortColumn" value={`asc-${column}`} checked={selectedColumn === column}/>
                    </label>
                </>*/
            ))}
        </>
    );
}

export default SortFilter;