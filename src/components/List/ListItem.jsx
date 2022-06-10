import PropTypes from 'prop-types';
import PropertiesList from './PropertiesList';
import styled from 'styled-components';

const StyledLi = styled.span`
  background-color: red;
`

const ListItem = ({pokemon}) =>
<StyledLi>
    <span>{pokemon.name}</span>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
    
    {
      pokemon.attacks && <PropertiesList title="Attacks" items={pokemon.attacks}/>
    }
    
    {
      pokemon.types && <PropertiesList title="Types" items={pokemon.types}/>
    }
</StyledLi>

ListItem.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attacks: PropTypes.arrayOf(PropTypes.string),
        types: PropTypes.arrayOf(PropTypes.string)
    })
}

export default ListItem;