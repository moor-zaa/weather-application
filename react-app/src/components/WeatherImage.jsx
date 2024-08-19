import React, { useEffect, useState } from "react";
import {
  cloudsImage,
  rainImage,
  snowImage,
  sunImage,
  thunderstormImage,
} from "../assets/imgs";

const WeatherImage = ({ state, width = 300 }) => {
  const [imgSrc, setImagrSrc] = useState();

  useEffect(() => {
    setImagrSrc(handleImage(state));
  }, [state]);

  const handleImage = (state) => {
    switch (state) {
      case "Clouds":
        return cloudsImage;
      case "Clear":
        return sunImage;
      case "Rain":
        return rainImage;
      case "Snow":
        return snowImage;
      case "Thunderstorm":
        return thunderstormImage;
      case "Drizzle":
        return rainImage;
      default:
        return sunImage;
    }
  };

  return (
    <div className="flex justify-center md:justify-start">
      <img src={imgSrc} alt="weather" width={width} />
    </div>
  );
};

export default WeatherImage;
