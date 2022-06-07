const PropertiesList = ({title, items}) => <>
    <h3>{title}</h3>
    <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
</>

export default PropertiesList;
