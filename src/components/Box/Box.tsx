import React, { memo } from "react";
import {
  BoxContainer,
  BoxDescription,
  BoxFooter,
  BoxHeader,
  BoxIcon,
  BoxTitle,
} from "./style";
import { BoxProps } from "./types";

const Box = ({ title, description }: BoxProps): JSX.Element => {
  return (
    <BoxContainer>
      <BoxHeader>
        <BoxTitle>{title}</BoxTitle>
        <BoxIcon size={22} />
      </BoxHeader>
      <BoxDescription>{description}</BoxDescription>
      <BoxFooter>Teste</BoxFooter>
    </BoxContainer>
  );
};

export default memo(Box);
