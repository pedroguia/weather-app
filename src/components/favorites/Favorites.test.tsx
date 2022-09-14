import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";
import Favorites from ".";
import { FavoritesList } from "../../mocks";

const onSelectFavorite = jest.fn();

const store = createMockStore({
  favorites: {
    list: FavoritesList,
  },
});

const EmptyStore = createMockStore({
  favorites: {
    list: [],
  },
});

test("renders Favorites component with empty list", () => {
  render(
    <Provider store={EmptyStore}>
      <Favorites onSelectFavorite={onSelectFavorite} />
    </Provider>,
  );
  expect(screen.getByText("Favorites")).toBeInTheDocument();
  expect(screen.getByText(/There are no favorites yet!/i)).toBeInTheDocument();
});

test("renders Favorites component with two items", () => {
  render(
    <Provider store={store}>
      <Favorites onSelectFavorite={onSelectFavorite} />
    </Provider>,
  );
  expect(screen.getByText("Favorites (2)")).toBeInTheDocument();
  expect(screen.getAllByTestId("favorite-location")).toHaveLength(2);
  expect(screen.getByText("Porto, Portugal")).toBeInTheDocument();
  expect(screen.getByText("Braga, Portugal")).toBeInTheDocument();
});
