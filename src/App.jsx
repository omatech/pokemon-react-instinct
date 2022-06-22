import List from "./components/list/List";
import ListItem from "./components/List/ListItem";
import TypeFilter from "./components/List/TypeFilter";
import SearchFilter from "./components/list/SearchFilter";
import Pagination from "./components/List/Pagination";
import usePokemons from "./hooks/usePokemons";
import "./styles/app.scss";
import SortFilter from "./components/List/SortFilter";

const App = () => {
    const [types, setTypes, setSearchValue, pagination, paginationLength, pokemonsInPage, sorting] = usePokemons();

    return (
        <>
            <SearchFilter setSearchValue={setSearchValue}/>
            <TypeFilter types={types} setTypes={setTypes}/>
            <SortFilter sorting={sorting}/>
            <List>
                {
                    pokemonsInPage && pokemonsInPage.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                }
            </List>
            <Pagination pagination={pagination} paginationLength={paginationLength} />
        </>
    )
}

export default App
