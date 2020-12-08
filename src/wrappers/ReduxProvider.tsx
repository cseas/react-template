import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { allReducers } from "../reducers";

type ReduxProviderProps = {
  children?: ReactNode;
};

export function ReduxProvider(props: ReduxProviderProps) {
  const store = configureStore({
    reducer: allReducers,
  });

  return <Provider store={store}>{props.children}</Provider>;
}
