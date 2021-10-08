import styled from "styled-components";

export const InputStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fonts.inputText};
  padding: 10px;
`;

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.colors.primary.main.color};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.inputText};
  margin-bottom: 3%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 5%;
`;
