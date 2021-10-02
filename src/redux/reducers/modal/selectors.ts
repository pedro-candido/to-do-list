import { useSelector } from "react-redux";
import State from "redux/store/IStore";

export const selectIsOpen = (): boolean =>
  useSelector((state: State) => state.modal.isOpen);
