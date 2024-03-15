import {useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {GiWeightScale} from "react-icons/gi";
import {WiHumidity} from "react-icons/wi";
import {FiWind} from "react-icons/fi";
import {FaCloud} from "react-icons/fa";
import {WeatherIcons} from "../data/WeatherIcons.jsx";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (latitude && longitude) {
          const apiKey = import.meta.env.VITE_WEATHER_API_KEY
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
          const data = await response.json();
          setWeatherData(data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData().then(r => r);
  }, [latitude, longitude]);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar/>
        <section>
          <div className="container px-6 pt-12 md:pt-20 mx-auto text-center flex flex-col justify-center items-center">
            <div className="flex justify-center mt-10">
              {weatherData && WeatherIcons[weatherData.weather[0].main]}
            </div>
            <h1
              className="text-4xl font-bold text-gray-900 dark:text-white duration-300 ease-linear">{weatherData?.name}</h1>
            <p
              className="text-lg mt-4 text-gray-500 dark:text-gray-300 duration-300 ease-linear">{weatherData?.weather[0].main}</p>
            <p
              className="text-lg mt-4 text-gray-500 dark:text-gray-300 duration-300 ease-linear">{weatherData?.main.temp}&deg;C</p>
          </div>
          <div
            className="max-w-7xl mx-auto font-[sans-serif] mt-0 md:mt-20 mb-12 lg:mb-0 text-gray-950 dark:text-white">
            <div
              className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-36 gap-y-20 mt-16 duration-300 ease-linear">
              <div className="text-center">
                <WiHumidity className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
                <h3 className="text-xl font-semibold mb-2">Humidity</h3>
                <p className="text-gray-500 text-sm">{weatherData?.main.humidity}%</p>
              </div>
              <div className="text-center">
                <GiWeightScale className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
                <h3 className="text-xl font-semibold mb-2">Pressure</h3>
                <p className="text-gray-500 text-sm">{weatherData?.main.pressure} hPa</p>
              </div>
              <div className="text-center">
                <FiWind className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
                <h3 className="text-xl font-semibold mb-2">Wind</h3>
                <p className="text-gray-500 text-sm">{weatherData?.wind.speed} km/h</p>
              </div>
              <div className="text-center">
                <FaCloud className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
                <h3 className="text-xl font-semibold mb-2">Cloudiness</h3>
                <p className="text-gray-500 text-sm">{weatherData?.clouds.all}%</p>
              </div>
            </div>
          </div>
        </section>
        <Footer className="mt-auto"/>
      </div>
    </>
  );
};

export default Home;
