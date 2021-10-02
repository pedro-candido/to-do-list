import { createSlice } from "@reduxjs/toolkit";
import { TasksProps } from "./types";

const initialState: Array<TasksProps> = [];

const slice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    closeTask(state: Array<TasksProps>, { payload }) {
      const newValue = state.filter((item) => {
        item.taskName === payload.taskName;
      });

      return {
        ...state,
        newValue,
      };
    },
    createTask(state, { payload }) {
      const newObj: TasksProps = {
        isDone: false,
        taskDescription: payload.taskDescription,
        taskName: payload.taskName,
      };

      return {
        ...state,
        newObj,
      };
    },
    openTask(state) {
      return {
        ...state,
        isDone: true,
      };
    },
  },
});

const tasksReducer = slice.reducer;

export default tasksReducer;
export const { closeTask, createTask, openTask } = slice.actions;
