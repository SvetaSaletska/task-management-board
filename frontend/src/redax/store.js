import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../redax/boardsSlice";
import { filterReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    board: boardsReducer,
    filter: filterReducer,
  },
});
