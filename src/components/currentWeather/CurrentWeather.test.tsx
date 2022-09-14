import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";
import CurrentWeather from ".";
import { coordinates, currentWeatherData, FavoritesList } from "../../mocks";

const store = createMockStore({
  favorites: {
    list: FavoritesList,
  },
});

test("renders CurrentWeather component", () => {
  render(
    <Provider store={store}>
      <CurrentWeather data={currentWeatherData} coordinates={coordinates} />
    </Provider>,
  );
  expect(screen.getByTestId("current-weather-title")).toBeInTheDocument();
  expect(screen.getByText(/Soito Chão/i)).toBeInTheDocument();
  expect(screen.getByTestId("current-weather-body")).toBeInTheDocument();
  expect(screen.getByTestId("current-weather-body-temp")).toBeInTheDocument();
  expect(screen.getByText(/15.1º/i)).toBeInTheDocument();
  expect(screen.getByTestId("current-weather-body-icon")).toBeInTheDocument();
  expect(screen.getByText(/Overcast clouds/i)).toBeInTheDocument();
  expect(screen.getByAltText("Clouds")).toBeInTheDocument();
  expect(screen.getByTestId("current-weather-body-details")).toBeInTheDocument();
  expect(screen.getByText(/Feels like/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind/i)).toBeInTheDocument();
});
