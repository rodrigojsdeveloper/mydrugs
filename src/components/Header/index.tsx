import menu from "../../assets/icons8-menu-arredondado-50.png";
import logo from "../../assets/mydrugs.png";
import { Container } from "./style";

const Header = () => {
  const width = window.screen.width;

  return (
    <Container>
      <a>SHOP</a>
      <a>FAQ</a>
      <img src={logo} alt="My Drugs" className="logo" />
      <a>SAFETY</a>
      <a>CONTACT</a>
      {width < 768 ? <img src={menu} alt="Menu" className="menu" /> : null}
    </Container>
  );
};

export { Header };
