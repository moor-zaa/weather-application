import React from "react";
import WeatherImage from "../WeatherImage";
import moment from "moment";
import { DegreeSvg, HumiditySvg, WindSvg } from "../../assets/svgs";

const ForecastItem = ({ item }) => {
  return (
    <div className="flex flex-wrap items-center justify-between border-[#085587] rounded-xl bg-[#042a43] w-[calc(100%-32px)] md:w-full my-2 p-4 gap-4">
      <WeatherImage width={64} state={item.weather[0].main} />
      <div className="w-[100px]">{moment(item.dt_txt).format("dddd")}</div>
      <div className="flex items-center w-[160px]">
        +{item.main.temp_max} <DegreeSvg width={18} /> /{" "}
        <span className="opacity-60 flex items-center">
          {item.main.temp_min} <DegreeSvg width={18} />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <WindSvg />
        <span className="">{item.wind.speed} km/h</span>
      </div>
      <div className="flex items-center gap-4 mr-2">
        <HumiditySvg />
        <span className="">{item.main.humidity} %</span>
      </div>
    </div>
  );
};

export default ForecastItem;
