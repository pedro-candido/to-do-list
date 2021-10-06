import { ModalProps } from "redux/reducers/modal/types";
import { TasksProps } from "redux/reducers/tasks/types";

interface State {
  modal: ModalProps;
  tasks: TasksProps[];
}

export default State;
