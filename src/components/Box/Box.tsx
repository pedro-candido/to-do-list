import React, { memo } from "react";
import { BoxContainer, BoxDescription, BoxTitle } from "./style";
import { BoxProps } from "./types";

const Box = ({ title, description }: BoxProps): JSX.Element => {
  return (
    <BoxContainer>
      <BoxTitle>{title}</BoxTitle>
      <BoxDescription>{description}</BoxDescription>
    </BoxContainer>
  );
};

export default memo(Box);
