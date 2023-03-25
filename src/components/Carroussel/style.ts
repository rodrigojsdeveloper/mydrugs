import styled from "styled-components";

const Container = styled.menu`
  li > button::before,
  .slick-dots li.slick-active button:before {
    color: var(--white-fixed);
    padding-top: 1px;

    @media (min-width: 768px) {
      content: "";

      width: 35px;
      height: 2.5px;

      background-color: var(--white-fixed);
    }
  }

  .slick-dots li {
    @media (min-width: 768px) {
      margin: 0 10px;
    }
  }

  .slick-dots li.slick-active button:before {
    border: 1px solid var(--white-fixed);
    border-radius: 50%;

    @media (min-width: 768px) {
      border-radius: 0;
      border: none;
    }
  }

  .slick-track {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .slick-slide {
    img {
      margin: 0 auto;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    @media (max-width: 425px) {
      padding-top: 20px;
    }
  }
`;

export { Container };
