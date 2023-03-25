import { LateralMenu } from "../LateralMenu";
import logo from "../../assets/mydrugs.png";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <a>SHOP</a>
      <a>FAQ</a>
      <img src={logo} alt="My Drugs" className="logo" />
      <a>SAFETY</a>
      <a>CONTACT</a>

      <LateralMenu />
    </Container>
  );
};

export { Header };
