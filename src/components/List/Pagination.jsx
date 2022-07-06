import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const Pagination = ({state, dispatch}) => {
    const {pagination} = useContext(PokemonContext);
    const {selectedPage, setSelectedPage, pagesNumber, itemsPerPage} = pagination;
    const {itemsToShow} = state;

    const renderButtons = () => {
        let buttons = [];
        let firstButton = selectedPage - 1;

        if (selectedPage === pagesNumber - 1) firstButton = selectedPage - 2
        else if (selectedPage === 0) firstButton = 0

        for(let i = 0; i < 3; i++){
            buttons.push(<button key={firstButton + i} disabled={firstButton + i === selectedPage} onClick={() => setSelectedPage(firstButton + i)}>{ firstButton + i + 1 }</button>);
        }

        return buttons;
    }

    const onChangeHandler = ({target}) => {
        dispatch({
            type: 'SET_ITEMS_TO_SHOW',
            payload: {
                itemsToShow: parseInt(target.value)
            }
        });
    }

    return <>
        <select onChange={onChangeHandler} value={itemsToShow}>
            {
                itemsPerPage.map(size => <option value={size} key={size}>{size}</option>)
            }
        </select>
        { renderButtons() }
    </>
}

export default Pagination;