import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
