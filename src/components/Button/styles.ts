import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 10px;
  font-size: 24px;
`;
