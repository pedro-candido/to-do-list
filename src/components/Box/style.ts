import styled from "styled-components";

export const BoxContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const BoxTitle = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;

export const BoxDescription = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 24px;
`;
