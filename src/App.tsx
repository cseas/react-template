import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment } from "src/actions";
import { useTranslation } from "react-i18next";

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
      <button onClick={() => dispatch(increment())}>+</button>

      <h1>i18n</h1>
      <p>{t("title")}</p>
    </>
  );
}
