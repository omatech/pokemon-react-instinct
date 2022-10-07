import styled from "styled-components";
import PropTypes from "prop-types";
import PropertiesList from "./PropertiesList";

const StyledLi = styled.li`
    list-style: none;
`;

const StyledSpan = styled.span`
    background-color: ${props => props.pokemonColor};
`;

const ListItem = (props) => {
    const {pokemon, openModal} = props
    const pokemonColor = pokemon.types.includes('water') ? 'blue' : 'black';

    return (
        <StyledLi color={pokemonColor}>
            <StyledSpan onClick={() => openModal(pokemon.id)} pokemonColor={pokemonColor} style={{color: "white"}}>{pokemon.name}</StyledSpan>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
            {
                pokemon.attacks && <PropertiesList title="Attacks" items={pokemon.attacks}/>
            }

            {
                pokemon.types && <PropertiesList title="Types" items={pokemon.types}/>
            }
        </StyledLi>
    )
}

ListItem.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attacks: PropTypes.arrayOf(PropTypes.string),
        types: PropTypes.arrayOf(PropTypes.string)
    })
}

export default ListItem;
