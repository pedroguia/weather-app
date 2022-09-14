import { Coordinates, CurrentWeatherData, FavoriteLocation, ForecastData } from "../types";

export const coordinates: Coordinates = {
  longitude: -8.4293,
  latitude: 41.5485,
};

export const currentWeatherData: CurrentWeatherData = {
  weather: [
    {
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  main: {
    temp: 15.06,
    feels_like: 15.08,
    humidity: 94,
  },
  wind: {
    speed: 4.49,
  },
  dt: 1640529759,
  name: "Soito Chão",
};

export const FavoritesList: FavoriteLocation[] = [
  {
    name: "Porto, Portugal",
    coordinates: {
      latitude: 41.1579438,
      longitude: -8.629105299999999,
    },
  },
  {
    name: "Braga, Portugal",
    coordinates: {
      latitude: 41.5454486,
      longitude: -8.426506999999999,
    },
  },
];

export const forecastData: ForecastData = {
  daily: [
    {
      dt: 1640520000,
      temp: {
        day: 14.61,
      },
      weather: [
        {
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
    },
    {
      dt: 1640606400,
      temp: {
        day: 14.59,
      },
      weather: [
        {
          main: "Much Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
    },
    {
      dt: 1640692800,
      temp: {
        day: 14.73,
      },
      weather: [
        {
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
    },
    {
      dt: 1640779200,
      temp: {
        day: 15.56,
      },
      weather: [
        {
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
    },
    {
      dt: 1640865600,
      temp: {
        day: 16.64,
      },
      weather: [
        {
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
    {
      dt: 1640952000,
      temp: {
        day: 16.55,
      },
      weather: [
        {
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
    },
    {
      dt: 1641038400,
      temp: {
        day: 17.58,
      },
      weather: [
        {
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
    },
    {
      dt: 1641124800,
      temp: {
        day: 14.15,
      },
      weather: [
        {
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
    },
  ],
};
