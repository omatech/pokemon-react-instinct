import {useRef} from "react";

const SearchFilter = ({setSearchValue}) => {
    const inputRef = useRef();
    const onClickHandler = () => {
        setSearchValue(inputRef.current.value)
    }

    return <>
        <input type="text" ref={inputRef}/>
        <button onClick={onClickHandler}>Search</button>
    </>;


}

export default SearchFilter;