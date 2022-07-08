import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const Pagination = () => {
    const {state, dispatch} = useContext(PokemonContext);
    const {pagination} = state;
    const {selectedPage, pagesNumber, itemsPerPage, selectedItemsPerPage} = pagination;

    const onClickHandler = (value) => {
        dispatch({
            type: "SET_SELECTED_PAGE",
            payload: {
                selectedPage: parseInt(value)
            }
        });
    }

    const renderButtons = () => {
        let buttons = [];
        let firstButton = selectedPage - 1;

        if (selectedPage === pagesNumber - 1) firstButton = selectedPage - 2
        else if (selectedPage === 0) firstButton = 0

        for(let i = 0; i < 3; i++){
            buttons.push(<button key={firstButton + i} disabled={firstButton + i === selectedPage} onClick={() => onClickHandler(firstButton + i)}>{ firstButton + i + 1 }</button>);
        }

        return buttons;
    }

    const onChangeHandler = ({target}) => {
        dispatch({
            type: "SET_SELECTED_ITEMS_PER_PAGE",
            payload: {
                selectedItemsPerPage: parseInt(target.value)
            }
        });
    }

    return <>
        <select onChange={onChangeHandler} value={selectedItemsPerPage}>
            {
                itemsPerPage.map(size => <option value={size} key={size}>{size}</option>)
            }
        </select>
        { renderButtons() }
    </>
}

export default Pagination;