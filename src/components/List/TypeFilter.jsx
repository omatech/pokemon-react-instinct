import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonProvider";

const TypeFilter = () => {
    const {typeFilter} = useContext(PokemonContext);
    const {types, setTypes, isLoadingTypes} = typeFilter;

    const onChangeHandler = ({target}) => {
        setTypes((state) => {
            const newState = structuredClone(state);
            newState.find(type => type.name === target.name).isSelected = target.checked;
            return newState;
        });
    };

    return isLoadingTypes ? <span className="spinner spinner-slow"/>
        : <div>
                {
                    types.map(type =>
                        [
                            <label key={type.name}>
                                <input type="checkbox" name={type.name} checked={type.isSelected}
                                       onChange={onChangeHandler}/>
                                <span>{type.name}</span>
                            </label>
                        ]
                    )
                }
            </div>
}

export default TypeFilter;