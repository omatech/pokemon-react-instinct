import List from './components/list/List'
import ListItem from './components/List/ListItem'
import './styles/app.scss'
import TypeFilter from "./components/List/TypeFilter";
import SearchFilter from "./components/list/SearchFilter";
import usePokemons from "./hooks/usePokemons";

const App = () => {
    const [types, setTypes, setSearchValue, filteredPokemons] = usePokemons();

    return (
        <>
            <SearchFilter setSearchValue={setSearchValue}/>
            <TypeFilter types={types} setTypes={setTypes}/>
            <List>
                {
                    filteredPokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                }
            </List>
        </>
    )
}

export default App
