import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";
import { FavoritesList } from "../../mocks";

const store = createMockStore({ favorites: { list: FavoritesList } });
const queryClient = new QueryClient();

test("renders home page", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Home />
      </Provider>
    </QueryClientProvider>,
  );
  expect(screen.getByText(/Loading weather information/i)).toBeInTheDocument();
  expect(await screen.findByTestId("favorites-component")).toBeInTheDocument();
  expect(await screen.findByTestId("current-weather-component")).toBeInTheDocument();
  expect(await screen.findByTestId("forecast-component")).toBeInTheDocument();
});
