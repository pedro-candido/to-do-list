import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, Container } from "./styles";

const Modal = () => {
  return (
    <Container>
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
