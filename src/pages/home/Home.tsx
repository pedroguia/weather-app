/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, memo } from "react";
import ReactTooltip from "react-tooltip";
import Loading from "../../components/loading";
import Favorites from "../../components/favorites";
import Forecast from "../../components/forecast";
import SearchField from "../../components/searchField";
import CurrentWeather from "../../components/currentWeather";
import useForecast from "../../api/useForecast";
import useCurrentWeather from "../../api/useCurrentWeather";
import useBrowserCoordinates from "../../hooks/useBrowserCoordinates";
import { addUrlParam, getUrlParam } from "../../utils/urlParams";
import { Coordinates, FavoriteLocation, Suggestion, SuggestionAddress } from "../../types";

const urlParamsCoordinates: Coordinates = {
  latitude: Number(getUrlParam("lat")) || undefined,
  longitude: Number(getUrlParam("lng")) || undefined,
};

const Home = () => {
  const hasUrlParamsCoordinates: boolean =
    !!urlParamsCoordinates.latitude && !!urlParamsCoordinates.longitude;

  const browserCoordinates = useBrowserCoordinates(!hasUrlParamsCoordinates);
  const [coordinates, setCoordinates] = useState<Coordinates>(urlParamsCoordinates);
  const [lastSearchedPlace, setLastSearchedPlace] = useState<string | undefined>(undefined);

  const { data: dataCurrent, isFetching: isFetchingCurrent } = useCurrentWeather(coordinates);
  const { data: dataForecast, isFetching: isFetchingForecast } = useForecast(coordinates);

  useEffect(() => {
    if (!hasUrlParamsCoordinates) setCoordinates(browserCoordinates);
  }, [browserCoordinates]);

  const handleSuggestSelect = (data: Suggestion) => {
    const {
      gmaps: { address_components, name: city },
      location: { lat: latitude, lng: longitude },
    } = data;

    const country: string | undefined = address_components.find((item: SuggestionAddress) =>
      item.types.includes("country"),
    )?.long_name;

    setLastSearchedPlace(`${city}, ${country}`);
    setCoordinates({ latitude, longitude });
    addUrlParam("lat", String(latitude));
    addUrlParam("lng", String(longitude));
  };

  const handleSelectFavorite = ({ coordinates }: FavoriteLocation) => {
    const { latitude, longitude } = coordinates;
    setCoordinates(coordinates);
    addUrlParam("lat", String(latitude));
    addUrlParam("lng", String(longitude));
  };

  const isLoadingCoordinates: boolean = !coordinates.latitude || !coordinates.longitude;
  const isLoadingWeather: boolean = isFetchingCurrent || isFetchingForecast;

  if (isLoadingCoordinates) return <Loading text="Loading user location" />;
  if (isLoadingWeather) return <Loading text="Loading weather information" />;

  return (
    <>
      <div className="home">
        <Favorites onSelectFavorite={handleSelectFavorite} />
        <div className="main">
          <SearchField placeholder="Search for a location" onSuggestSelect={handleSuggestSelect} />
          <CurrentWeather
            data={{ ...dataCurrent, name: lastSearchedPlace || dataCurrent.name }}
            coordinates={coordinates}
          />
          <Forecast data={dataForecast} />
        </div>
      </div>
      <ReactTooltip effect="solid" place="right" />
    </>
  );
};

export default memo(Home);
