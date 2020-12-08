import { combineReducers } from "redux";
import { counterSlice } from "./counterSlice";

export const allReducers = combineReducers({
  counter: counterSlice.reducer,
});

export { counterSlice };
