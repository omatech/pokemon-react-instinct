import {React, useState} from 'react'

const usePokemonTypes = () => {
  const initialTypes=[
    {name: 'Veneno', isSelected: true}, 
    {name: 'Agua', isSelected: true}
  ];
  const [types, setTypes] = useState (initialTypes);
  const selectedTypes=types.filter(type=>type.isSelected===true);
  return [types, setTypes, selectedTypes]
}

export default usePokemonTypes;