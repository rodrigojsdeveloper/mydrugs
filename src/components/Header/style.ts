import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 95px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin: 0 auto;

  .menu {
    width: 25px;
  }

  .logo {
    width: 80px;
    height: 80px;

    object-fit: contain;
  }

  & > a {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    height: 60px;

    .logo {
      width: 40px;
    }

    & > a {
      display: none;
    }
  }
`;

export { Container };
