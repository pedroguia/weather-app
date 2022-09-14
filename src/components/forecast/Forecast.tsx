import { memo } from "react";
import Card from "../../components/card";
import formatUnixDate from "../../utils/formatUnixDate";
import { ForecastData, ForecastDay } from "../../types";

interface Props {
  data: ForecastData;
}

const Forecast = ({ data }: Props) => {
  const daysArray: ForecastDay[] = data.daily.slice(1);
  const getIconSrc = (day: ForecastDay): string =>
    `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

  return (
    <Card dataTestId="forecast-component">
      <div className="forecast">
        <div className="forecast__title">Next 7 days...</div>
        <div className="forecast__days-list">
          {daysArray.map((day: ForecastDay) => (
            <div className="day" key={String(day.dt)} data-testid="forecast-day">
              <div className="date" data-testid="forecast-date">
                {formatUnixDate(day.dt, "E")}
              </div>
              <img className="img" src={getIconSrc(day)} alt={day.weather[0].main} />
              <div className="temp" data-testid="forecast-temp">
                {day.temp.day.toFixed(1)}º
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
export default memo(Forecast);
