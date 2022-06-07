import pokemonsData from './pokemons.json'

const pokemons=pokemonsData.map(pokemon => {
    return {id: pokemon.id, name: pokemon.name, attacks: pokemon.moves, types: pokemon.types}
});

export default pokemons;