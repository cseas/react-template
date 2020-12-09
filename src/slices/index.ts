import { combineReducers } from "redux";
import { counterSlice } from "./counterSlice";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { counterSlice };
