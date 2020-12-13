import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { rootReducer } from "../slices";

type ReduxProviderProps = {
  children?: ReactNode;
};

export const store = configureStore({
  reducer: rootReducer,
});

export function ReduxProvider(props: ReduxProviderProps) {
  return <Provider store={store}>{props.children}</Provider>;
}
