import {useState} from "react";

const SearchFilter = ({setSearchValue}) => {
    const [inputValue, setInputValue] = useState("");
    const onChangeHandler = ({target}) => {
        setInputValue(target.value)
        setSearchValue(target.value)
    }

    return <input type="text" value={inputValue} onChange={onChangeHandler}/>;
}

export default SearchFilter;