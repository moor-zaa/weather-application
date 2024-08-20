import { useCallback, useEffect, useState } from "react";

const useWeather = () => {
  const [todayData, setTodayData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "68dc26b73f768fab9dffc33a4433b9aa";

  const getWeatherData = useCallback(() => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );

        const response = await res.json();

        let todayStorageData = {
          location: response.name,
          weather: response,
          temperature: response.main.temp,
        };

        setTodayData(todayStorageData);

        localStorage.setItem(
          "weatherDetails",
          JSON.stringify({ ...todayStorageData, lastUpdated: Date.now() })
        );

        let forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );

        let forecastResponse = await forecastRes.json();
        let dailyForecasts = [];

        forecastResponse.list?.forEach((item) => {
          // Get the date part from the dt_txt field (YYYY-MM-DD)
          let date = item.dt_txt.split(" ")[0];
          if (
            !dailyForecasts.some((forecast) => forecast.dt_txt.includes(date))
          ) {
            dailyForecasts.push(item);
          }
        });

        setForecast(dailyForecasts);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return [todayData, forecast, loading];
};

export default useWeather;
