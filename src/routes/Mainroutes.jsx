import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NotFoundPage from "../pages/NotFoundPage";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/movie/:name" element={<MovieDetails />} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default Mainroutes;
