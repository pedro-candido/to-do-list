import React from "react";
import { InputContainer, InputStyled, LabelStyled } from "./styles";
import { Iinput } from "./types";

const Input = ({
  inputType,
  placeholder,
  labelText,
  id,
}: Iinput): JSX.Element => {
  return (
    <InputContainer>
      <LabelStyled htmlFor={id}>{labelText}</LabelStyled>
      <InputStyled type={inputType} placeholder={placeholder} id={id} />
    </InputContainer>
  );
};

export default Input;
