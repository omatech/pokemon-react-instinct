import List from './components/list/List'
import ListFilter from './components/list/ListFilter'
import ListItem from './components/List/ListItem'
import pokemons from "./api"
import './styles/app.scss'

import usePokemonTypes from './hooks/usePokemonTypes';

const App = () => {
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const filteredPokemons = pokemons.filter(pokemon =>
        selectedTypes.some(
            type => pokemon.types.includes(type.name))
    );

    return (
        <>
            <ListFilter types={types} setTypes={setTypes}/>
            <List>
                {
                    filteredPokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon}/>)
                }
            </List>
        </>
    )
}

export default App
