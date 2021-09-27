import styled from "styled-components";
import { darken } from "polished";

export const ButtonStyled = styled.button`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastColor};
  width: 50px;
  height: 50px;
  font-size: 24px;
  transition: 0.2s;
  cursor: pointer;
  border: 0px;
  top: 2%;
  right: 2%;
  position: absolute;

  &:hover {
    background-color: ${({ theme }) =>
      darken(0.1, theme.colors.primary.main.color)};
    transition: 0.2s;
  }

  &:active {
    background-color: ${({ theme }) =>
      darken(0.2, theme.colors.primary.main.color)};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary.main.color};
  }
`;
