import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders header component", () => {
  render(<Header />);
  expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
  expect(screen.getByText(/Developed by Pedro Guia/i)).toBeInTheDocument();
});
