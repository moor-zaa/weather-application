import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useWeather = () => {
  const [temprature, setTemperature] = useState(null);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [forecast, setForecast] = useState(null);

  const API_KEY = "68dc26b73f768fab9dffc33a4433b9aa";

  const getWeatherData = useCallback(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          )
          .then((response) => {
            setLocation(response.data.name);
            setWeather(response.data);
            setTemperature(response.data.main.temp);

            let todayStorageData = {
              location: response.data.name,
              weather: response.data,
              temperature: response.data.main.temp,
              lastUpdated: Date.now(),
            };

            localStorage.setItem(
              "weatherDetails",
              JSON.stringify(todayStorageData)
            );
          });

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          )
          .then((response) => {
            let dailyForecasts = [];

            response.data.list.forEach((item) => {
              // Get the date part from the dt_txt field (YYYY-MM-DD)
              let date = item.dt_txt.split(" ")[0];
              if (
                !dailyForecasts.some((forecast) =>
                  forecast.dt_txt.includes(date)
                )
              ) {
                dailyForecasts.push(item);
              }
            });

            setForecast(dailyForecasts);
          });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return [temprature, location, weather, forecast];
};

export default useWeather;
