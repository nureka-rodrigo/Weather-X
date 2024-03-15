import {MdSunny, MdThunderstorm} from "react-icons/md";
import {BsCloudDrizzleFill, BsCloudRainFill, BsCloudsFill, BsCloudSnowFill} from "react-icons/bs";
import {RiMistFill} from "react-icons/ri";

export const WeatherIconsForecast = {
  Thunderstorm: <MdThunderstorm className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Drizzle: <BsCloudDrizzleFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Rain: <BsCloudRainFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Snow: <BsCloudSnowFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Mist: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Smoke: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Haze: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Dust: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Fog: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Sand: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Ash: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Squall: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Tornado: <RiMistFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Clear: <MdSunny className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
  Clouds: <BsCloudsFill className="text-gray-900 h-28 rounded-xl w-4/5 duration-300 ease-linear"/>,
};