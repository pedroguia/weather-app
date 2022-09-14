import { memo } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Card from "../card";
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import formatUnixDate from "../../utils/formatUnixDate";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import isCoordinateFavorite from "../../utils/isCoordinateFavorite";
import { add, remove } from "../../redux/favorites";
import { Coordinates, CurrentWeatherData, FavoriteLocation } from "../../types";

interface Props {
  data: CurrentWeatherData;
  coordinates: Coordinates;
}

const CurrentWeather = ({ data, coordinates }: Props) => {
  const dispatch = useDispatch();
  const favoritesList = useSelector(state => state.favorites.list);

  const { main, weather, dt, wind } = data;
  const isFavorite = isCoordinateFavorite(coordinates, favoritesList);

  const handleToggleFavorite = () => {
    if (isFavorite) dispatch(remove(coordinates));
    else dispatch(add({ name, coordinates }));
  };

  const date: string = formatUnixDate(dt);
  const temp: string = main.temp.toFixed(1);
  const icon: string = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const description: string = capitalizeFirstLetter(weather[0].description);
  const name: string | undefined = isFavorite
    ? favoritesList.find(
        (item: FavoriteLocation) =>
          item.coordinates.latitude === coordinates.latitude &&
          item.coordinates.longitude === coordinates.longitude,
      )?.name
    : data.name;

  return (
    <Card dataTestId="current-weather-component">
      <div className="current-weather">
        <div className="current-weather__header">
          <div className="current-weather__header--title" data-testid="current-weather-title">
            Current weather in <span>{name}</span>
            <button
              onClick={handleToggleFavorite}
              className={`icon-btn ${isFavorite && "active"}`}
              data-tip={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          </div>
          <div className="current-weather__header--date">{date}</div>
        </div>
        <div className="current-weather__body" data-testid="current-weather-body">
          <div className="current-weather__body--temp" data-testid="current-weather-body-temp">
            {temp}º
          </div>
          <div className="current-weather__body--icon" data-testid="current-weather-body-icon">
            <img className="img" src={icon} alt={weather[0].main} />
            <div>{description}</div>
          </div>
          <div
            className="current-weather__body--details"
            data-testid="current-weather-body-details"
          >
            <div>
              <span className="title">Feels like</span>
              <span className="value">{main.feels_like}º</span>
            </div>
            <div>
              <span className="title">Humidity </span>
              <span className="value"> {main.humidity}%</span>
            </div>
            <div>
              <span className="title">Wind </span>
              <span className="value">{wind.speed} km/h</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default memo(CurrentWeather);
