import { useQuery } from "react-query";
import axios from "axios";
import { apiKey, baseUrl } from "../constants/api";
import { Coordinates } from "../types";

const useForecast = (coordinates: Coordinates) => {
  const enabled: boolean = !!coordinates.latitude && !!coordinates.longitude;
  const url: string = `${baseUrl}/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric&exclude=minutely,hourly,alerts`;

  return useQuery(
    ["getForecast", coordinates],
    async () => {
      const { data } = await axios.get(url);
      return data;
    },
    { enabled },
  );
};

export default useForecast;
