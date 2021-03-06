import styled from "styled-components";
import PropTypes from "prop-types";
import PropertiesList from "./PropertiesList";

const ListItem = ({pokemon}) => {
    const pokemonColor = pokemon.types.includes('Agua') ? 'blue': 'red';

    const StyledLi = styled.li`
    list-style: none;
    `;

    const StyledSpan = styled.span`
      background-color: ${pokemonColor};
    `;

    return (
        <StyledLi color={pokemonColor}>
            <StyledSpan style={{color: "white"}}>{pokemon.name}</StyledSpan>
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