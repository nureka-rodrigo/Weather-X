import { useTheme } from "../hooks/ThemeProvider.jsx";
import { ThemeIcons } from "../data/ThemeIcons.jsx";

const ThemeButton = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <button
      className="h-fit w-fit rounded-md p-2 transition-colors focus:outline-none"
      onClick={toggleTheme}
      aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
    >
      {currentTheme === "light" ? ThemeIcons.light : ThemeIcons.dark}
    </button>
  );
};

export default ThemeButton;
