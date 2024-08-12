import { MdSunny, MdThunderstorm } from "react-icons/md";
import {
  BsCloudDrizzleFill,
  BsCloudRainFill,
  BsCloudsFill,
  BsCloudSnowFill,
} from "react-icons/bs";
import { RiMistFill } from "react-icons/ri";

export const WeatherIconsForecast = {
  Thunderstorm: (
    <MdThunderstorm className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Drizzle: (
    <BsCloudDrizzleFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Rain: (
    <BsCloudRainFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Snow: (
    <BsCloudSnowFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Mist: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Smoke: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Haze: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Dust: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Fog: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Sand: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Ash: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Squall: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Tornado: (
    <RiMistFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Clear: (
    <MdSunny className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
  Clouds: (
    <BsCloudsFill className="text-neautral-950 dark:text-gray-100 h-20 rounded-xl w-4/5" />
  ),
};
