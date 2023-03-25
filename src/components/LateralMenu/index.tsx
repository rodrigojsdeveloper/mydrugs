import menu from "../../assets/icons8-menu-arredondado-50.png";
import x from "../../assets/icons8-excluir-48.png";
import { Container } from "./style";
import { useState } from "react";

const LateralMenu = () => {
  const [openMenuLateral, setOpenMenuLateral] = useState<boolean>(false);

  const [imgClicked, setImgClicked] = useState<boolean>(false);

  return (
    <Container>
      <img
        src={menu}
        alt="Menu"
        onClick={() => {
          setOpenMenuLateral(true);
          setImgClicked(true);
        }}
        style={openMenuLateral ? { display: "none" } : { display: "flex" }}
      />

      <div
        className={
          imgClicked ? (openMenuLateral ? "menuOpen" : "menuClose") : ""
        }
      >
        <div>
          <img src={x} alt="fechar" onClick={() => setOpenMenuLateral(false)} />
        </div>

        <div>
          <a>HOME</a>
          <a>SHOP</a>
          <a>FAQ</a>
          <a>SAFETY</a>
          <a>CONTACT</a>
        </div>

        <div>
          <p>LOGGED IN AS</p>
          <h2>ADM</h2>

          <a>ADMIN PAINEL</a>
        </div>
      </div>
    </Container>
  );
};

export { LateralMenu };
