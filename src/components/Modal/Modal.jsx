import {createPortal} from 'react-dom';
import styles from "./modal.scss";
import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const PokemonDetailModal = (props) => {
    const {closeModal, showModal} = props;

    const {state} = useContext(PokemonContext);
    const pokemon = state.filteredPokemons.find(pokemon => state.selectedPokemonId === pokemon.id);

    const Modal = () => createPortal(
        <div className="modal">
            <div className="modal-content">
                <h5 className="modal-title">{pokemon.name}</h5>
                <img src={pokemon.image} alt="" width="300"/>
                <button onClick={closeModal}>x</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    )

    return showModal ? <Modal/> : null
}

export default PokemonDetailModal;
