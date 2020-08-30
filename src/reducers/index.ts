import { counterReducer } from "src/reducers/counter";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  counter: counterReducer,
});
