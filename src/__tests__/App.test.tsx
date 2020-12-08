import { render, screen } from "@testing-library/react";
import { App } from "../App";

it("shows Home", () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});
