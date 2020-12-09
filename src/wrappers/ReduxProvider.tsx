import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { rootReducer } from "../slices";

type ReduxProviderProps = {
  children?: ReactNode;
};

export function ReduxProvider(props: ReduxProviderProps) {
  const store = configureStore({
    reducer: rootReducer,
  });

  return <Provider store={store}>{props.children}</Provider>;
}
