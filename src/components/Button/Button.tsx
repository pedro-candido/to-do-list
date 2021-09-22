import { StyledButton } from "./style";
import { ButtonProps } from "./types";

const Button = ({ children }: HTMLButtonElement) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
