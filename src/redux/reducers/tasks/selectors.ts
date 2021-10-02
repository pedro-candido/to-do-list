import { useSelector } from "react-redux";
import State from "redux/store/IStore";

export const selectTaskName = (): string =>
  useSelector((state: State) => state.tasks.taskName);

export const selectTaskDescription = (): string =>
  useSelector((state: State) => state.tasks.taskDescription);

export const selectIsDone = (): boolean =>
  useSelector((state: State) => state.tasks.isDone);
