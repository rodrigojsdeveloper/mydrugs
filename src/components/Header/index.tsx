import { LateralMenu } from "../LateralMenu";
import logo from "../../assets/mydrugs.png";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <div className="divLinks">
        <Link to="/shop">SHOP</Link>
        <a>FAQ</a>
      </div>
      <img src={logo} alt="My Drugs" className="logo" />
      <div className="divLinks">
        <a>SAFETY</a>
        <a>CONTACT</a>
      </div>

      <LateralMenu />
    </Container>
  );
};

export { Header };
