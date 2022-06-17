const TypeFilter = ({types, setTypes}) => {
    const onChangeHandler = ({target}) => {
        setTypes((state) => {
            const newState = structuredClone(state);
            newState.find(type => type.name === target.name).isSelected = target.checked;
            return newState;
        });
    };

    return (
            <div>
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
    );
}

export default TypeFilter;