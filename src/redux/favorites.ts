import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Coordinates, FavoriteLocation } from "../types";
import isCoordinateFavorite from "../utils/isCoordinateFavorite";

interface FavoritesState {
  list: FavoriteLocation[];
}

const initialState: FavoritesState = {
  list: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FavoriteLocation>) => {
      const { name } = action.payload;
      const listCopy: FavoriteLocation[] = JSON.parse(JSON.stringify(state.list));
      if (isCoordinateFavorite(action.payload.coordinates, listCopy)) return;

      listCopy.push(action.payload);
      state.list = listCopy;
      localStorage.setItem("favorites", JSON.stringify(listCopy));
      toast.success(`${name} added to favorites!`);
    },
    remove: (state, action: PayloadAction<Coordinates>) => {
      const { latitude, longitude } = action.payload;
      let listCopy: FavoriteLocation[] = JSON.parse(JSON.stringify(state.list));
      if (!isCoordinateFavorite(action.payload, listCopy)) return;

      const locationToRemove: FavoriteLocation | undefined = listCopy.find(
        (item: FavoriteLocation) =>
          item.coordinates.latitude === latitude && item.coordinates.longitude === longitude,
      );

      listCopy = listCopy.filter(
        (item: FavoriteLocation) =>
          item.coordinates.latitude !== latitude && item.coordinates.longitude !== longitude,
      );

      state.list = listCopy;
      localStorage.setItem("favorites", JSON.stringify(listCopy));
      toast.success(`${locationToRemove?.name} removed from favorites!`);
    },
  },
});

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
