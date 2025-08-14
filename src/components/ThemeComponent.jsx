import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import style from "../style/theme.module.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  function updateTheme() {
    if(theme === "dark") {
       setTheme("light"); 
       localStorage.setItem("app-theme", "light"); 
    } else {
      setTheme("dark"); 
      localStorage.setItem("app-theme", "dark")
    }
  }

  return (
    <div className={style.themeWrapper} onClick={updateTheme}>
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className={style.themeIcon}
        
      />
    </div>
  );
}

export default ThemeComponent;
