import React from "react";
import { InputStyled } from "./styles";
import { Iinput } from "./types";

const Input = ({ inputType }: Iinput) => {
  return <InputStyled type={inputType} />;
};

export default Input;
