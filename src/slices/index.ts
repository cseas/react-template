import { combineReducers } from "redux";
import { store } from "../wrappers/ReduxProvider";
import { counterSlice } from "./counterSlice";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export { counterSlice };
