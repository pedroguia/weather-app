import { useQuery } from "react-query";
import axios from "axios";
import { apiKey, baseUrl } from "../constants/api";
import { Coordinates } from "../types";

const useCurrentWeather = (coordinates: Coordinates) => {
  const enabled: boolean = !!coordinates.latitude && !!coordinates.longitude;
  const url: string = `${baseUrl}/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`;

  return useQuery(
    ["getCurrentWeather", coordinates],
    async () => {
      const { data } = await axios.get(url);
      return data;
    },
    { enabled },
  );
};

export default useCurrentWeather;
