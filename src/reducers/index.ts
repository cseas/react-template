import { combineReducers } from "redux";
import { counterSlice } from "./counter";

export const allReducers = combineReducers({
  counter: counterSlice.reducer,
});
