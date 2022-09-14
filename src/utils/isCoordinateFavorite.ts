import { Coordinates, FavoriteLocation } from "../types";

const isCoordinateFavorite = (coordinates: Coordinates, list: FavoriteLocation[]): boolean => {
  const { latitude, longitude } = coordinates;

  return list.some(
    (item: FavoriteLocation) =>
      item.coordinates.latitude === latitude && item.coordinates.longitude === longitude,
  );
};

export default isCoordinateFavorite;
