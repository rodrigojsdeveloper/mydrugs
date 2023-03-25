import { LateralMenu } from "../LateralMenu";
import logo from "../../assets/mydrugs.png";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <Link to="/shop">SHOP</Link>
      <a>FAQ</a>
      <img src={logo} alt="My Drugs" className="logo" />
      <a>SAFETY</a>
      <a>CONTACT</a>

      <LateralMenu />
    </Container>
  );
};

export { Header };
