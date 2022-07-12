import PokemonProvider from "./context/PokemonProvider";
import "./styles/app.scss";
import PokemonDashboard from "./components/PokemonDashboard";

const App = () => {
    return (
        <PokemonProvider>
            <PokemonDashboard/>
        </PokemonProvider>
    )
}

export default App
