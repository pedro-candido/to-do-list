import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.div`
  margin: 10px;
  cursor: pointer;
  font-size: 25px;
`;
