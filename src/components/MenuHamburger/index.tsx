import { Container } from "./style";
import { useState } from "react";

const MenuHamburguer = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <Container>
      <input id="menu-hamburguer" type="checkbox" />

      <label htmlFor="menu-hamburguer">
        <div
          className="menu"
          onClick={() => {
            setCheckbox(true);
            if (checkbox) {
              setCheckbox(false);
            }
          }}
        >
          <span className="hamburguer"></span>
        </div>
      </label>
    </Container>
  );
};

export { MenuHamburguer };
