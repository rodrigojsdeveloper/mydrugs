import styled from "styled-components";

const Container = styled.div`
  .menu {
    width: 60px;
    height: 60px;
  
    cursor: pointer;
  }

  .hamburguer {
    position: relative;
    display: block;
    background: var(--white-fixed);
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before,
  .hamburguer:after {
    background: var(--white-fixed);
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -10px;
  }

  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }
  
  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }
`;

export { Container };
