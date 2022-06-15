

const ListFilter = ({types, setTypes}) => {
    const onChangeHandler=({target})=>{
/// TBD
    };

    return (
        <>
            <div>
            {
                types.map(type => 
                    [
                        <label key={type.name}>
                            <input type="checkbox" name="types" checked={type.isSelected} onChange={onChangeHandler}/>
                            <span>{type.name}</span>
                        </label>
                    ]
                )
            }
            </div>
        </>
    );
}

export default ListFilter;