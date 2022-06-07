import List from './components/list/List'
import ListItem from './components/List/ListItem'
import pokemons from "./api"

const App = () => {
  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.types.includes('Veneno');
  });
  return (
    <List>
      {
        filteredPokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)
      }
    </List>
)
}

export default App
