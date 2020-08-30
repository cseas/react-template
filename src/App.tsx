import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { counterSlice } from "src/reducers/counter";

type CounterState = {
  counter: any;
};

export function App() {
  const { t } = useTranslation();

  const counter = useSelector((state: CounterState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>
      <button onClick={() => dispatch(counterSlice.actions.increment(5))}>
        +
      </button>

      <h1>i18n</h1>
      <p>{t("title")}</p>
    </>
  );
}
