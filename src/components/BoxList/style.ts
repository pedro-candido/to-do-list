import styled from "styled-components";

export const BoxContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
