import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  z-index: 10;
  transition: 0.5s;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 50px;
  max-width: 500px;
  margin: auto;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
