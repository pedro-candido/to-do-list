import styled from "styled-components";

export const InputStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px;
  font-size: 20px;
`;

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.colors.primary.main.color};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 3%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 5%;
`;
