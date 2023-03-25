import { Container } from "./style";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, disabled, onClick, type }: IButtonProps) => {
  return (
    <Container disabled={disabled} onClick={onClick} type={type}>
      {children}
    </Container>
  );
};

export { Button };
