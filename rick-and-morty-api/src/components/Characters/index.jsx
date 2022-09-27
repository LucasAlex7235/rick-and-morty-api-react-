import { Container } from "./style";
import title from "../../style/font.module.css";

export const Title = ({ children }) => {
  return (
    <Container>
      <h3 className={title.title1}>Personagens Rick and Morty</h3>
      {children}
    </Container>
  );
};
