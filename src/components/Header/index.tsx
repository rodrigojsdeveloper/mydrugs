import { MenuHamburguer } from "../MenuHamburger";
import mydrugs from "../../assets/mydrugs.png";
import { Container } from "./style";

const Header = () => {
  const width = window.screen.width;

  return (
    <Container>
      {width < 768 ? <MenuHamburguer /> : null}
      <a>SHOP</a>
      <a>FAQ</a>
      <img src={mydrugs} alt="My Drugs" />
      <a>SAFETY</a>
      <a>CONTACT</a>
    </Container>
  );
};

export { Header };
