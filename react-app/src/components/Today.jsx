import React from "react";
import WeatherImage from "./WeatherImage";
import {
  CalendarSvg,
  DegreeSvg,
  HumiditySvg,
  LocationSvg,
  WindSvg,
} from "../assets/svgs";
import moment from "moment";

const Today = ({ weather, temperature, location }) => {
  return (
    <>
      {weather && (
        <div className="w-full md:w-auto">
          <WeatherImage state={weather?.weather[0].main} />
          <div className="flex flex-col md:flex-row items-center gap-2 text-[32px] md:text-[48px]">
            <div className="flex items-center">
              {temperature}
              <DegreeSvg />
            </div>
            <div className="text-[32px] my-4">
              <span className="hidden md:inline md:mx-2">-</span>
              {weather?.weather[0]?.description}
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 my-4">
            <LocationSvg />
            <span className="">{location}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-8">
            <div className="flex items-center gap-4">
              <WindSvg />
              <span className="">{weather.wind.speed} km/h</span>
            </div>
            <div className="flex items-center gap-4">
              <HumiditySvg />
              <span className="">{weather.main.humidity} %</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
            <CalendarSvg />
            <span className="">
              Today - {moment(Date.now()).format("dddd")}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Today;
