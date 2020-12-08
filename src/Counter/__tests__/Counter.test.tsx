import userEvent from "@testing-library/user-event";
import { render, screen } from "src/testUtils";
import { Counter } from "../Counter";

describe("Counter screen", () => {
  it("buttons should change displayed value", () => {
    render(<Counter />);
    const counter = screen.getByText(/counter*/i);
    const plus = screen.getByRole("button", { name: /\+/i });
    const minus = screen.getByText(/\-/i);

    expect(counter).toHaveTextContent("0");
    userEvent.click(plus);
    userEvent.click(plus);
    expect(counter).toHaveTextContent("10");
    userEvent.click(minus);
    expect(counter).toHaveTextContent("9");
  });
});
