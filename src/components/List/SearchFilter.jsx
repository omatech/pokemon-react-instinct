import {useContext, useRef} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const SearchFilter = () => {
    const inputRef = useRef();
    const {dispatch} = useContext(PokemonContext);

    const onClickHandler = () => {
        dispatch({
            type: "SET_SEARCH_VALUE",
            payload: {
                searchValue: inputRef.current.value,
            }
        });
    }

    return <>
        <input type="text" ref={inputRef}/>
        <button onClick={onClickHandler}>Search</button>
    </>;
}

export default SearchFilter;