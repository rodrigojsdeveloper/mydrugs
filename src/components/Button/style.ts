import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  max-width: 70px;
  height: 30px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;
  border-radius: 32px;

  color: var(--white-fixed);
  background-color: var(--transparent);
  border: 2px solid var(--white-fixed);

  padding: 10px;

  &:active,
  &:hover {
    color: var(--grey-100);
    background-color: var(--white-fixed);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export { Container };
