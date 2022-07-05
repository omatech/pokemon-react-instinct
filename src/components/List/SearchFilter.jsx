import {useContext, useRef} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const SearchFilter = () => {
    const inputRef = useRef();
    const {searchFilter} = useContext(PokemonContext);
    const {setSearchValue} = searchFilter;

    const onClickHandler = () => {
        setSearchValue(inputRef.current.value)
    }

    return <>
        <input type="text" ref={inputRef}/>
        <button onClick={onClickHandler}>Search</button>
    </>;


}

export default SearchFilter;