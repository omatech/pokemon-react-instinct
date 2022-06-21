import styles from "./List.module.scss";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const List = ({children}) =>
<StyledUl className={styles.color}>
  { children }
</StyledUl>

export default List;