import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../reducers/counter";

type CounterState = {
  counter: number;
};

export function Counter() {
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
    </>
  );
}
