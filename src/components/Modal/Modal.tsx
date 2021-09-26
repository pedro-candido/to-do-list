import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, Container } from "./styles";

type ModalProps = {
  isVisible?: boolean;
};

const Modal = ({ isVisible }: ModalProps) => {
  return (
    <Container style={!isVisible ? { display: "none" } : { display: "block" }}>
      <Input
        id={"task"}
        inputType={"text"}
        labelText={"Digite o nome da tarefa"}
        placeholder={"Ex .: To do List"}
      />
      <Input
        id={"description"}
        inputType={"text"}
        labelText={"Digite a descrição da tarefa(Opcional)"}
        placeholder={"Digite aqui as atividades"}
      />
      <ButtonContainer>
        <Button>Adicionar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Modal;
