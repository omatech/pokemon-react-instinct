import List from "./components/list/List";
import ListItem from "./components/List/ListItem";
import TypeFilter from "./components/List/TypeFilter";
import SearchFilter from "./components/list/SearchFilter";
import Pagination from "./components/List/Pagination";
import SortFilter from "./components/List/SortFilter";
import usePokemons from "./hooks/usePokemons";
import "./styles/app.scss";
import PokemonProvider from "./context/PokemonProvider";

const App = () => {
    const pokemonsData = usePokemons();
    const {pokemons, isLoading} = pokemonsData;

    return (
        <PokemonProvider pokemonsData={pokemonsData}>
            <SearchFilter />
            <TypeFilter  />
            <SortFilter />
            {isLoading
                ? <span className="spinner spinner-slow"></span>
                : <List>
                    {
                        pokemons && pokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                    }
                </List>
            }
            <Pagination />
        </PokemonProvider>
    )
}

export default App
