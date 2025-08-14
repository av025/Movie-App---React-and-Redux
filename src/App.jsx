import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Mainroutes from "./routes/Mainroutes";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={"app-wrapper"} data-theme={theme}>
        <NavbarComponent />
        <Mainroutes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
