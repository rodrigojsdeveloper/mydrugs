import mydrugs from "../../assets/mydrugs.png";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <a>SHOP</a>
      <a>FAQ</a>
      <img src={mydrugs} alt="My Drugs" />
      <a>SAFETY</a>
      <a>CONTACT</a>
    </Container>
  );
};

export { Header };
