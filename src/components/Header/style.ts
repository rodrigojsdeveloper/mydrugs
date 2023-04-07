import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 95px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin: 0 auto;

  .logo {
    width: 80px;
    height: 80px;
    width: 100%;
    max-width: 300px;

    object-fit: contain;
  }

  & > .divLinks {
    width: 100%;
    max-width: 300px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > a {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;

      color: var(--white-fixed);

      &:visited {
        color: var(--white-fixed);
      }
    }
  }

  @media (max-width: 768px) {
    height: 60px;
    justify-content: space-between;

    .logo {
      width: 40px;
    }

    & > .divLinks {
      display: none;
    }
  }
`;

export { Container };
