import styled, { keyframes } from "styled-components";

const menuOpen = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const menuClose = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  display: none;

  .menuOpen,
  .menuClose {
    display: block;
  }

  .menuOpen {
    animation: ${menuOpen} 0.3s ease-in;
  }

  .menuClose {
    animation: ${menuClose} 0.3s ease-out forwards;
  }

  & > img {
    width: 25px;
  }

  & > div {
    width: 70%;
    height: 100vh;

    position: fixed;
    top: 0;
    right: 0;
    z-index: 2000;

    display: none;
    background-color: var(--shadow);

    & > div {
      border-bottom: 1px solid var(--white-fixed);
    }

    & > div:nth-child(1) {
      height: 60px;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      padding: 20px;

      & > img {
        width: 25px;
        height: 25px;

        object-fit: contain;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      padding: 25px 20px 0 20px;

      & > a {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;

        padding-bottom: 25px;

        &:visited {
          color: var(--white-fixed);
        }
      }
    }

    & > div:nth-child(3) {
      padding: 20px;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & > p {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;

        padding-bottom: 5px;
        color: var(--grey-50);
      }

      & > h2 {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;

        padding-bottom: 25px;
      }

      & > a {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        
        &:visited {
          color: var(--white-fixed);
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export { Container };
