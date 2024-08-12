import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { GiWeightScale } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { FaCloud } from "react-icons/fa";
import { WeatherIconsNow } from "../data/WeatherIconsNow.jsx";
import { WeatherIconsForecast } from "../data/WeatherIconsForecast.jsx";
import axios from "axios";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import Loading from "./Loading.jsx";

const Index = () => {
  const [locationError, setLocationError] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            setLocationError(true);
          },
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLocationError(true);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (latitude && longitude) {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

        try {
          const [weatherResponse, forecastResponse, airQualityResponse] =
            await Promise.all([
              axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`,
              ),
              axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`,
              ),
              axios.get(
                `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`,
              ),
            ]);

          setWeatherData(weatherResponse.data);
          setForecastData(forecastResponse.data);
          setAirQualityData(airQualityResponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData().then((r) => r);
  }, [latitude, longitude]);

  const convertToSubscript = (str) => {
    const subscriptMap = {
      0: "₀",
      1: "₁",
      2: "₂",
      3: "₃",
      4: "₄",
      5: "₅",
      6: "₆",
      7: "₇",
      8: "₈",
      9: "₉",
    };

    return str.replace(/[0-9]/g, (match) => subscriptMap[match]);
  };

  const formatKey = (key) => {
    return convertToSubscript(key.replace("_", ".").toUpperCase());
  };

  return (
    <>
      <ScrollToTopButton />
      {locationError ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mx-5 text-center">
            Error: Location access not granted. Please enable location service,
            as it is essential for the system to work.
          </h1>
        </div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <Navbar />
          <section id="now" className="w-full">
            <div className="container px-6 pt-12 lg:pt-28 mx-auto text-center flex flex-col justify-center items-center">
              <div className="flex justify-center mt-10">
                {weatherData && WeatherIconsNow[weatherData.weather[0].main]}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {weatherData?.name}
              </h1>
              <p className="text-lg mt-4 text-gray-900 font-semibold dark:text-gray-300">
                {weatherData?.weather[0].main}
              </p>
              <p className="text-lg mt-4 text-gray-900 font-semibold dark:text-gray-300">
                {Math.round(weatherData?.main.temp)}&deg;C
              </p>
            </div>
            <div className="max-w-7xl mx-auto font-[sans-serif] mt-0 md:mt-20 mb-12 lg:mb-0 text-neutral-950 dark:text-gray-100">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-36 gap-y-20 mt-16">
                <div className="text-center">
                  <WiHumidity className="w-12 h-12 mb-4 inline-block bg-gray-200 dark:bg-neutral-900 p-3 rounded-xl text-neutral-950 dark:text-gray-100" />
                  <h3 className="text-xl font-semibold mb-2">Humidity</h3>
                  <p className="text-gray-900 dark:text-gray-500 text-sm">
                    {weatherData?.main.humidity}%
                  </p>
                </div>
                <div className="text-center">
                  <GiWeightScale className="w-12 h-12 mb-4 inline-block bg-gray-200 dark:bg-neutral-900 p-3 rounded-xl text-neutral-950 dark:text-gray-100" />
                  <h3 className="text-xl font-semibold mb-2">Pressure</h3>
                  <p className="text-gray-900 dark:text-gray-500 text-sm">
                    {weatherData?.main.pressure} hPa
                  </p>
                </div>
                <div className="text-center">
                  <FiWind className="w-12 h-12 mb-4 inline-block bg-gray-200 dark:bg-neutral-900 p-3 rounded-xl text-neutral-950 dark:text-gray-100" />
                  <h3 className="text-xl font-semibold mb-2">Wind</h3>
                  <p className="text-gray-900 dark:text-gray-500 text-sm">
                    {weatherData?.wind.speed} km/h
                  </p>
                </div>
                <div className="text-center">
                  <FaCloud className="w-12 h-12 mb-4 inline-block bg-gray-200 dark:bg-neutral-900 p-3 rounded-xl text-neutral-950 dark:text-gray-100" />
                  <h3 className="text-xl font-semibold mb-2">Cloudiness</h3>
                  <p className="text-gray-900 dark:text-gray-500 text-sm">
                    {weatherData?.clouds.all}%
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="forecast" className="w-full">
            <div className="container px-6 mb-12 lg:pt-28 mx-auto text-center flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                24 Hour Forecast
              </h1>
              <div className="grid gap-4 mt-8">
                <div className="flex overflow-x-auto">
                  {forecastData &&
                    forecastData.list.slice(0, 8).map((forecast) => (
                      <div
                        key={forecast.dt}
                        className="relative flex flex-col mt-6 text-neutral-950 bg-gray-200 dark:bg-neutral-900 bg-clip-border rounded-xl w-32 mr-4"
                      >
                        <div className="p-6">
                          <h5 className="block mb-2 font-sans antialiased font-semibold leading-snug tracking-normal text-gray-900 dark:text-white">
                            {new Date(forecast.dt * 1000).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </h5>
                          <div className="flex items-center justify-center">
                            {WeatherIconsForecast[forecast.weather[0].main]}
                          </div>
                          <h5 className="block mb-2 font-sans antialiased font-semibold leading-snug tracking-normal text-gray-900 dark:text-white">
                            {Math.round(forecast.main.temp)}&deg;C
                          </h5>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>

          <section id="air-quality" className="w-full">
            <div className="container px-6 mb-8 lg:pt-28 mx-auto text-center flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Air Quality
              </h1>
              <div className="max-w-4xl mt-12 mb-12 mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="p-6 rounded-lg bg-gray-200 dark:bg-neutral-900 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  {airQualityData &&
                    Object.entries(airQualityData.list[0].components).map(
                      ([key, value]) => (
                        <div key={key} className="space-y-2">
                          <h2 className="text-3xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                            {value}
                          </h2>
                          <p className="text-gray-700 dark:text-gray-500">
                            {formatKey(key)}
                          </p>
                        </div>
                      ),
                    )}
                </div>
              </div>
            </div>
          </section>

          <Footer className="mt-auto" />
        </div>
      )}
    </>
  );
};

export default Index;
