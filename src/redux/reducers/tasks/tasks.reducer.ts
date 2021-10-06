import { createSlice } from "@reduxjs/toolkit";
import { TasksProps } from "./types";

const initialState: Array<TasksProps> = [];

const slice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    closeTask(state: Array<TasksProps>, { payload }) {
      const newValue = state.filter((item) => {
        item.name === payload.name;
      });

      return {
        ...state,
        newValue,
      };
    },
    createTask(state, { payload }) {
      const newTask = {
        name: payload.name,
        description: payload.description,
        isDone: false,
      };

      const tasks = [...state, newTask];

      return tasks;
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
