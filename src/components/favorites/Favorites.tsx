import { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../../components/card";
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import { getUrlParam } from "../../utils/urlParams";
import { remove } from "../../redux/favorites";
import { Coordinates, FavoriteLocation } from "../../types";

interface Props {
  onSelectFavorite(location: FavoriteLocation): void;
}

const Favorites = ({ onSelectFavorite }: Props) => {
  const dispatch = useDispatch();
  const favoritesList = useSelector(state => state.favorites.list);
  const favoritesLengthLabel: string = !!favoritesList.length ? `(${favoritesList.length})` : "";

  const handleClickRemove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    coordinates: Coordinates,
  ) => {
    e.stopPropagation();
    dispatch(remove(coordinates));
  };

  const isFavoriteSelected = ({ coordinates }: FavoriteLocation): boolean => {
    const { latitude, longitude } = coordinates;
    const urlParamLatitude: number = Number(getUrlParam("lat"));
    const urlParamLongitude: number = Number(getUrlParam("lng"));

    return latitude === urlParamLatitude && longitude === urlParamLongitude;
  };

  return (
    <Card dataTestId="favorites-component">
      <div className="favorites">
        <div className="favorites__title">Favorites {favoritesLengthLabel}</div>
        <div className="favorites__list">
          {!!favoritesList.length ? (
            favoritesList.map((location: FavoriteLocation) => (
              <div
                className={`location ${isFavoriteSelected(location) && "selected"}`}
                key={location.name}
                onClick={() => onSelectFavorite(location)}
                data-testid="favorite-location"
              >
                {location.name}
                {!isFavoriteSelected(location) && (
                  <button
                    onClick={e => handleClickRemove(e, location.coordinates)}
                    className="icon-btn"
                    data-tip={"Remove"}
                    data-testid="remove-favorite-location"
                  >
                    <AiOutlineClose />
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="empty-state">There are no favorites yet!</div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default memo(Favorites);
