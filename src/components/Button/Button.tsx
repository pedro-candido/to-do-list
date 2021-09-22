import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

const Button = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
