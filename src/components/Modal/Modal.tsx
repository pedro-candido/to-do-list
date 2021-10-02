import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "redux/reducers/modal/modal.reducer";
import { selectIsOpen } from "redux/reducers/modal/selectors";
import { createTask } from "redux/reducers/tasks/tasks.reducer";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, Container, ModalContent } from "./styles";

const Modal = (): JSX.Element => {
  const dispatch = useDispatch();
  const isOpen = selectIsOpen();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleCloseModal = () => dispatch(closeModal());

  const handleAddTask = () => {
    dispatch(createTask({ taskName, taskDescription }));
  };

  return (
    <Container
      onClick={() => handleCloseModal()}
      style={!isOpen ? { display: "none" } : { display: "block" }}
    >
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        style={
          !isOpen
            ? { opacity: 0, transition: "all 5s" }
            : { opacity: 1, transition: "all 5s" }
        }
      >
        <Input
          id={"task"}
          type={"text"}
          labelText={"Digite o nome da tarefa"}
          placeholder={"Ex .: To do List"}
          value={taskName}
          onChange={(event) => setTaskName(event.currentTarget.value)}
        />
        <Input
          id={"description"}
          type={"text"}
          labelText={"Digite a descrição da tarefa(Opcional)"}
          placeholder={"Digite aqui as atividades"}
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.currentTarget.value)}
        />
        <ButtonContainer>
          <Button onClick={() => handleAddTask()}>Adicionar</Button>
        </ButtonContainer>
      </ModalContent>
    </Container>
  );
};

export default Modal;
