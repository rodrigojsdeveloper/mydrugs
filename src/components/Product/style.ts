import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 288px;
  height: 400px;

  border-radius: 4px;
  border: 2px solid var(--white-fixed);

  margin: 10px;

  & > figure {
    display: flex;
    flex-direction: row;
    justify-content: center;

    & > img {
      width: 100%;
      max-width: 240px;
      height: 240px;

      object-fit: contain;
    }
  }

  & > div {
    & > h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;

      padding-left: 25px;
    }

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      & > div {
        & > p:nth-child(1) {
          background-color: var(--red-fixed);
          margin: 30px 0 20px 0;
        }

        & > p:nth-child(2) {
          background-color: var(--grey-20);
        }

        & > p {
          width: fit-content;

          border-radius: 0 4px 4px 0;
          padding: 5px 7.5px 5px 2.5px;
        }
      }

      & > p {
        padding-top: 15px;
        line-height: 26px;

        width: 100%;
        max-width: 120px;
      }
    }
  }
`;

export { Container };
