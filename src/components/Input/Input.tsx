import React from "react";
import { InputContainer, InputStyled, LabelStyled } from "./styles";
import { Iinput } from "./types";

const Input = ({
  placeholder,
  labelText,
  id,
  onChange,
  value,
}: Iinput): JSX.Element => {
  return (
    <InputContainer>
      <LabelStyled htmlFor={id}>{labelText}</LabelStyled>
      <InputStyled
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value ? value : ""}
      />
    </InputContainer>
  );
};

export default Input;
