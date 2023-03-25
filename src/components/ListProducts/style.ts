import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  & > h2 {
    padding: 60px 0 40px 0;
    text-align: center;
  }

  & > menu {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1250px) {
      justify-content: center;
    }
  }
`;

export { Container };
