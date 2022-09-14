import { render, screen } from "@testing-library/react";
import Forecast from ".";
import { forecastData } from "../../mocks";

test("renders forecast component", () => {
  render(<Forecast data={forecastData} />);
  expect(screen.getByText(/Next 7 days.../i)).toBeInTheDocument();
  expect(screen.getAllByTestId("forecast-day")).toHaveLength(7);
  expect(screen.getAllByTestId("forecast-date")).toHaveLength(7);
  expect(screen.getAllByTestId("forecast-temp")).toHaveLength(7);
  expect(screen.getByText(/Mon/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Much Rain/i)).toBeInTheDocument();
  expect(screen.getByText(/14.6º/i)).toBeInTheDocument();
});
