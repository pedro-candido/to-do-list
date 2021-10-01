import { createSlice } from "@reduxjs/toolkit";

type stateProps = {
  taskName: string;
  taskDescription: string;
  isDone: boolean;
};

const initialState: stateProps = {
  taskName: "",
  taskDescription: "",
  isDone: false,
};

const slice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    closeTask(state) {
      state.isDone = true;
    },
    createTask(state, { payload }) {
      state.taskName = payload.taskName;
      state.taskDescription = payload.taskDescription;
    },
    openTask(state) {
      state.isDone = false;
    },
  },
});

const tasksReducer = slice.reducer;

export default tasksReducer;
export const { closeTask, createTask, openTask } = slice.actions;
