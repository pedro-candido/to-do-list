import React from "react";
import { BoxContainer, BoxDescription, BoxTitle } from "./style";
import { BoxProps } from "./types";

const Box = ({ title, description }: BoxProps) => {
  return (
    <BoxContainer>
      <BoxTitle>{title}</BoxTitle>
      <BoxDescription>{description}</BoxDescription>
    </BoxContainer>
  );
};

export default Box;
