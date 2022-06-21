const Pagination = ({pagination, paginationLength}) => {
    const {selectedPage, setSelectedPage, pagesNumber} = pagination;
    const {itemsToShow, setItemsToShow, itemsPerPage} = paginationLength;

    const renderButtons = () => {
        let buttons = [];
        for(let i = 0; i < pagesNumber; i++) {
            buttons.push(<button key={i} disabled={i === selectedPage} onClick={() => setSelectedPage(i)}>{ i + 1 }</button>)
        }
        return buttons;
    }

    const onChangeHandler = ({target}) => {
        setItemsToShow(parseInt(target.value));
    }

    return <>
        <select onChange={onChangeHandler} value={itemsToShow}>
            {
                itemsPerPage.map(size => <option value={size}>{size}</option>)
            }
        </select>
        { renderButtons() }
    </>
}

export default Pagination;