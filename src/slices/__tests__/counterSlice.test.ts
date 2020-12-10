import { counterSlice } from "../counterSlice";

const counter = counterSlice.reducer;
const { increment, decrement } = counterSlice.actions;

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(counter(undefined, { type: null })).toEqual(0);
  });

  it("should handle increment", () => {
    expect(counter(1, { type: increment.type, payload: 3 })).toEqual(4);
  });

  it("should handle decrement", () => {
    expect(counter(3, { type: decrement.type })).toEqual(2);
  });
});
