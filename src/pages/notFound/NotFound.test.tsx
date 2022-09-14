import { render, screen } from "@testing-library/react";
import NotFound from ".";

test("renders header component", () => {
  render(<NotFound />);
  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText(/This page does not exist!/i)).toBeInTheDocument();
});
