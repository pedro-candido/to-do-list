import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

const Button = ({
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
