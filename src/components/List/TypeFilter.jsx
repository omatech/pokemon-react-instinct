import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonProvider";
import usePokemonTypeApi from "../../hooks/usePokemonTypeApi";

const TypeFilter = () => {

    const isLoadingType = usePokemonTypeApi();
    const {state, dispatch} = useContext(PokemonContext);
    const {types} = state;

    const onChangeHandler = ({target}) => {
        dispatch({
            type: "SET_TYPE",
            payload: {
                typeName: target.value.name,
                typeIsChecked: target.value.isChecked
            }
        });
    };

    return isLoadingType ? <span className="spinner spinner-slow"/>
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