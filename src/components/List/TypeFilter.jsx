const TypeFilter = ({ state, dispatch }) => {
    const {types, isLoading} = state;

    const onChangeHandler = ({target}) => {
        dispatch({
            type: 'SET_SELECTED_TYPES',
            payload: {
                typeName: target.value.name,
                typeIsChecked: target.value.isChecked
            }
        });
    };

    return isLoading ? <span className="spinner spinner-slow"/>
        : <div>
                {
                    types.map(type =>
                        [
                            <label key={type.name}>
                                <input type="checkbox" name={type.name} checked={type.isSelected}
                                       onChange={onChangeHandler}/>
                                <span>{type.name}</span>
                            </label>
                        ]
                    )
                }
            </div>
}

export default TypeFilter;