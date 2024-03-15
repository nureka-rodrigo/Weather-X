import {useTheme} from "../hooks/ThemeProvider.jsx";
import {ThemeIcons} from "../data/ThemeIcons.jsx";

const ThemeButton = () => {
  const {currentTheme, toggleTheme} = useTheme();

  return (
    <>
      <button
        className="h-fit w-fit rounded-md"
        onClick={toggleTheme}
      >
        {currentTheme === "light" ? ThemeIcons.light : ThemeIcons.dark}
      </button>
    </>
  );
};

export default ThemeButton;