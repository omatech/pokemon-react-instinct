import styles from './List.module.scss'

const List = ({children}) =>
<ul className={styles.color}>
  { children }
</ul>

export default List;