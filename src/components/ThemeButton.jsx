import {MdDarkMode, MdSunny} from "react-icons/md";
import {useTheme} from "../hooks/ThemeProvider.jsx";

const ThemeButton = () => {
  const {currentTheme, toggleTheme} = useTheme();

  const themeIcons = {
    dark: <MdDarkMode className="h-5 w-5 text-white"/>,
    light: <MdSunny className="h-5 w-5 text-gray-900"/>,
  };

  return (
    <>
      <button
        className="h-fit w-fit rounded-md"
        onClick={toggleTheme}
      >
        {currentTheme === "light" ? themeIcons.light : themeIcons.dark}
      </button>
    </>
  );
};

export default ThemeButton;