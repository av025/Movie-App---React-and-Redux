import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieSearchOnId } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  async function getMovieByID() {
    const response = await axios.get(movieSearchOnId(id));
    setMovie(response.data);
  }
  useEffect(() => {
    getMovieByID();
  }, [id]);

  return (
    <>
      {movie && (
        <MovieCard
          Title={movie.Title}
          Year={movie.Year}
          Type={movie.Type}
          Poster={movie.Poster}
        />
      )}
    </>
  );
}

export default MovieDetails;
