import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import style from "../style/theme.module.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
     setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className={style.themeWrapper} onClick={toggleTheme}>
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className={style.themeIcon}
        
      />
    </div>
  );
}

export default ThemeComponent;
