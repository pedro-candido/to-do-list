import { createSlice } from "@reduxjs/toolkit";
import { ModalProps } from "./types";

const initialState: ModalProps = {
  isOpen: false,
};

const slice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    closeModal(state) {
      state.isOpen = false;
    },
    openModal(state) {
      state.isOpen = true;
    },
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

const modalReducer = slice.reducer;

export default modalReducer;
export const { closeModal, openModal, toggleModal } = slice.actions;
