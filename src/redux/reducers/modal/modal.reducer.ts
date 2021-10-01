import { createSlice } from "@reduxjs/toolkit";

type stateProps = {
  isOpen: boolean;
};

const initialState: stateProps = {
  isOpen: false,
};

const slice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

const modalReducer = slice.reducer;

export default modalReducer;
export const { toggleModal } = slice.actions;
