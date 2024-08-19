import React from "react";
import ForecastItem from "./ForecastItem";

const Forecast = ({ forecast }) => {
  return (
    <div className="flex flex-col items-center w-auto text-[18px]">
      {forecast &&
        forecast.map((item) => <ForecastItem item={item} key={item.dt} />)}
    </div>
  );
};

export default Forecast;
