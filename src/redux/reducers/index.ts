import { combineReducers } from "@reduxjs/toolkit";

import modal from "./modal/modal.reducer";
import tasks from "./tasks/tasks.reducer";

const reducer = combineReducers({
  modal,
  tasks,
});

export default reducer;
