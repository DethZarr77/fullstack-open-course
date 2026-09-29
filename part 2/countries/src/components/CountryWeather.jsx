import weatherService from "../services/weather";
import { useState, useEffect } from "react";

const CountryWeather = ({ lat, long, name }) => {
  //   console.log("CountryWeather props", lat, long, name);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService
      .getWeatherConditions(lat, long)
      .then((weather) => {
        // console.log(weatherConditions);
        setWeather(weather);
      })
      .catch((error) => {
        console.log("Error fetching conditions");
        console.log(error);
      });
  }, [lat, long]);

  // Conditionally render   
  if (!weather) {
    return null;
  }

  const tempCelsius = weather?.main?.temp ?? "-";
  const weatherDescription = weather.weather[0].description;
  const windSpeedMeters = weather?.wind?.speed ?? "-";

  return (
    <div>
      <h2>Weather in {name}</h2>
      <div>Temperature: {tempCelsius} Celsius</div>
      <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`} alt={weatherDescription} />
      <div>Wind: {windSpeedMeters} m/s</div>
    </div>
  );
};

export default CountryWeather;
