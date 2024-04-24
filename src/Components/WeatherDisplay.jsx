import classNames from "classnames";
import React from "react";
import { BsThermometer } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import { WiHumidity, WiWindBeaufort0 } from "react-icons/wi";

const WeatherDisplay = (props) => {
  const data = props.data
  return (
    <div className={classNames(weatherDiv)}>
      <div className={classNames(bodyDiv)}>
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
          className={classNames("size-28 ")}
        />
        <p className={classNames("font-bold text-4xl -mt-4")}>
          {data?.main.temp} °C
        </p>
        <p className={classNames("font-bold text-xl mt-2")}>
          {data?.weather[0].description}
        </p>
        <div className={classNames(locationDiv)}>
          <FaLocationPin />
          <p className={classNames("ml-2")}>
            {data?.name}, {data?.sys.country}
          </p>
        </div>
      </div>
      <div className={classNames(footerDiv)}>
        <div className={classNames(bottomDivs)}>
          <div className={classNames(subBottomDivs)}>
            <BsThermometer className={classNames(Icon)} />
            <p>{data?.main.feels_like} °C</p>
          </div>
          <p className={classNames(FtFont)}>Feels like</p>
        </div>
        <div className={classNames("border-l border-r", bottomDivs)}>
          <div className={classNames(subBottomDivs)}>
            <WiHumidity className={classNames(Icon)} />
            <p>{data?.main.humidity} %</p>
          </div>
          <p className={classNames(FtFont)}>Humidity</p>
        </div>
        <div className={classNames(bottomDivs)}>
          <div className={classNames(subBottomDivs)}>
            <WiWindBeaufort0 className={classNames(Icon)} />
            <p>{data?.wind.speed} m/s</p>
          </div>
          <p className={classNames(FtFont)}>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;

const weatherDiv = "w-full flex flex-col items-center justify-center";
const bodyDiv =
  "m-4 p-4 border-t border-b text-white flex flex-col justify-center items-center w-[90%] ";
const locationDiv =
  "flex items-center justify-center pt-4 font-light text-md text-gray-300";
const footerDiv =
  "bottom-0 flex justify-evenly items-center text-white w-[90%] ";

const bottomDivs =
  " w-[30%] m-4 p-4 flex justify-center items-center flex-col ";
const subBottomDivs = "flex items-center mb-2 text-lg ";
const Icon = "size-6 mr-2";
const FtFont = "text-gray-300 font-light";
