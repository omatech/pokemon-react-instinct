

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
                            <span>{type.name}</span>
                            <input type="checkbox" name="types" checked={type.selected} onChange={onChangeHandler}/>
                        </label>
                    ]
                )
            }
            </div>
        </>
    );
}

export default ListFilter;