import { useSelector } from "react-redux";
import State from "redux/store/IStore";
import { TasksProps } from "./types";

export const selectTask = (): TasksProps[] =>
  useSelector(({ tasks }: State) => tasks);
