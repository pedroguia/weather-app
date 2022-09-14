export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface FavoriteLocation {
  name?: string;
  coordinates: Coordinates;
}

export interface CurrentWeatherData {
  main: { temp: number; feels_like: number; humidity: number };
  weather: { description: string; icon: string; main: string }[];
  dt: number;
  wind: { speed: number };
  name: string;
}

export interface ForecastDay {
  dt: number;
  weather: { description: string; icon: string; main: string }[];
  temp: { day: number };
}

export interface ForecastData {
  daily: ForecastDay[];
}

export interface SuggestionAddress {
  long_name: string;
  types: string[];
}

export interface Suggestion {
  gmaps: { address_components: SuggestionAddress[]; name: string };
  location: { lat: number; lng: number };
}
