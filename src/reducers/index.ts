import { combineReducers } from "redux";

import { counterSlice } from "src/reducers/counter";

export const allReducers = combineReducers({
  counter: counterSlice.reducer,
});
