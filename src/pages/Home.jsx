import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {GiSunRadiations, GiWeightScale} from "react-icons/gi";
import {WiHumidity} from "react-icons/wi";
import {FiWind} from "react-icons/fi";
import {IoIosPartlySunny} from "react-icons/io";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar/>
      <div className="container px-6 pt-12 md:pt-32 mx-auto text-center flex flex-col justify-center items-center">
        <div className="flex justify-center mt-10">
          <IoIosPartlySunny className="text-gray-900 dark:text-gray-200 w-full h-96 rounded-xl lg:w-4/5 duration-300 ease-linear"/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto font-[sans-serif] mt-0 md:mt-16 mb-12 lg:mb-0 text-gray-950 dark:text-white">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-36 gap-y-20 mt-16 duration-300 ease-linear">
          <div className="text-center">
            <WiHumidity className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
            <h3 className="text-xl font-semibold mb-2">Humidity</h3>
            <p className="text-gray-500 text-sm">759 mmHg</p>
          </div>
          <div className="text-center">
            <GiSunRadiations className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
            <h3 className="text-xl font-semibold mb-2">UV Index</h3>
            <p className="text-gray-500 text-sm">0</p>
          </div>
          <div className="text-center">
            <GiWeightScale className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
            <h3 className="text-xl font-semibold mb-2">Pressure</h3>
            <p className="text-gray-500 text-sm">18%</p>
          </div>
          <div className="text-center">
            <FiWind className="w-12 h-12 mb-4 inline-block bg-blue-100 p-3 rounded-xl text-gray-950"/>
            <h3 className="text-xl font-semibold mb-2">Wind</h3>
            <p className="text-gray-500 text-sm">2.6 km/h</p>
          </div>
        </div>
      </div>
      <Footer className="mt-auto"/>
    </div>
  )
}

export default Home;
