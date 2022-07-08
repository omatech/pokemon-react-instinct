import {useContext} from "react";
import List from "./components/list/List";
import ListItem from "./components/List/ListItem";
import TypeFilter from "./components/List/TypeFilter";
import SearchFilter from "./components/list/SearchFilter";
import Pagination from "./components/List/Pagination";
import SortFilter from "./components/List/SortFilter";
import PokemonProvider, {PokemonContext} from "./context/PokemonProvider";
import "./styles/app.scss";

const App = () => {
    const {state} = useContext(PokemonContext);
    const {isLoading, pokemonsToShow} = state;

    return (
        <PokemonProvider>
            <SearchFilter />
            <TypeFilter />
            <SortFilter />
            {isLoading
                ? <span className="spinner spinner-slow"></span>
                : <List>
                    {
                        pokemonsToShow && pokemonsToShow.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                    }
                </List>
            }
            <Pagination />
        </PokemonProvider>
    )
}

export default App
