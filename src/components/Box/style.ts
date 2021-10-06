import styled from "styled-components";

export const BoxContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.background};
  margin: 1%;
  padding: 1%;
  text-align: center;
  flex-wrap: wrap;
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
