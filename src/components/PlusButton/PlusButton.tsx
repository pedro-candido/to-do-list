import { ButtonStyled } from "./style";
import { ButtonHTMLAttributes } from "react";

const PlusButton = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const { onClick } = { ...rest };
  return <ButtonStyled onClick={onClick}>+</ButtonStyled>;
};

export default PlusButton;
