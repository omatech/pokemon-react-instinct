import PropTypes from 'prop-types';

const ListItem = ({pokemon}) =>
<li>
    <span>{pokemon.name}</span>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
    <ul>
        {
            pokemon.attacks.map((attack, index) => <li key={index}>{attack}</li>)
        }
    </ul>
</li>

ListItem.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        attacks: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default ListItem;