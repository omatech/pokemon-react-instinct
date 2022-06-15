import {React, useState} from 'react'

const usePokemonTypes = () => {
  const initialTypes=[
    {name: 'Agua', isSelected: true},
    {name: 'Bicho', isSelected: false},
    {name: 'Fuego', isSelected: false},
    {name: 'Planta', isSelected: false},
    {name: 'Veneno', isSelected: true}, 
  ];
  const [types, setTypes] = useState (initialTypes);
  const selectedTypes=types.filter(type=>type.isSelected===true);
  return [types, setTypes, selectedTypes]
}

export default usePokemonTypes;