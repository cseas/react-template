import { useDispatch, useSelector } from "react-redux";
import { Home } from "./Home";
import { counterSlice } from "./reducers/counter";

type CounterState = {
  counter: any;
};

export function App() {
  const counter = useSelector((state: CounterState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Home />
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
