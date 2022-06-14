

const ListFilter = ({types, setTypes}) =>
{
    const onChangeHandler=({target})=>{
/// TBD
    };

    return <div>
    {
        types.map(type => 
        <label>
          <span>{type.name}</span>
          <input type="checkbox" checked={type.selected} onChange={onChangeHandler}/>
        </label>)
    }
</div>
}


export default ListFilter;