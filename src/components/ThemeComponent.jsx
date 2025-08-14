import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import style from "../style/theme.module.css";

function ThemeComponent() {
    return <div className={style.themeWrapper}>
     <FontAwesomeIcon icon={faMoon} />
    </div>
}


export default ThemeComponent;