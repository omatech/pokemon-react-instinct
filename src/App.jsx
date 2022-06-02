import List from './components/list/List'
import ListItem from './components/List/ListItem'
import pokemons from "./api"

const App = () => (
    <List>
      {
        pokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)
      }
    </List>
)

export default App
