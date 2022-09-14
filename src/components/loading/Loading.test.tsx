import { render, screen } from "@testing-library/react";
import Loading from ".";

test("renders loading component", () => {
  render(<Loading text="Fetching data" />);
  expect(screen.getByTestId("loading")).toBeInTheDocument();
  expect(screen.getByText(/Fetching data/i)).toBeInTheDocument();
});
