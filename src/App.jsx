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
    const {state, dispatch} = pokemonsData.typeFilter;

    return (
        <PokemonProvider pokemonsData={pokemonsData}>
            <SearchFilter />
            <TypeFilter state={state} dispatch={dispatch} />
            <SortFilter />
            {isLoading
                ? <span className="spinner spinner-slow"></span>
                : <List>
                    {
                        pokemons && pokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                    }
                </List>
            }
            <Pagination state={state} dispatch={dispatch} />
        </PokemonProvider>
    )
}

export default App
