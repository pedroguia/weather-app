/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { leiria } from "../constants/coordinates";
import { Coordinates } from "../types";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const useBrowserCoordinates = (showAlerts: boolean) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: undefined,
    longitude: undefined,
  });

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          if (showAlerts) toast.success("Location successfully retrieved!");
          setCoordinates({ latitude, longitude });
        },
        (err: GeolocationPositionError) => {
          if (showAlerts) setCoordinates(leiria);
          toast.error(`${err.message} - using Leiria as fallback.`);
        },
        options,
      );
    } catch (error) {
      if (showAlerts) setCoordinates(leiria);
      toast.error(`${error} - using Leiria as fallback.`);
    }
  }, []);

  return coordinates;
};

export default useBrowserCoordinates;
