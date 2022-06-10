const PropertiesList = ({title, items}) => <>
    <h3>{title}</h3>
    <ul>{items.map(item => <li style={{listStyle: 'none'}} key={item}>{item}</li>)}</ul>
</>

export default PropertiesList;
