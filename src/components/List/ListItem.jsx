import PropTypes from 'prop-types';
import PropertiesList from './PropertiesList';
import styled from 'styled-components';

const StyledLi = styled.span`
  ${({color}) => `background-color: ${color}`};
  // background-color: ${({color}) => color};
`

const ListItem = ({pokemon}) => {
    const pokemonColor = pokemon.types.includes('Agua') ? 'blue': 'red';

    return (
        <StyledLi color={pokemonColor}>
            <span style={{color: "white"}}>{pokemon.name}</span>
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