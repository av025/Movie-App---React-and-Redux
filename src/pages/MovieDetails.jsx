import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieSearchOnId } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import styles from "../style/movie-detail.module.css";
import {Rating} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  async function getMovieByID() {
    const response = await axios.get(movieSearchOnId(id));
    setMovie(response.data);
  } 
  
  const genreInArray = movie && movie.Genre.split(",");



  useEffect(() => {
    getMovieByID();
  }, [id]);

  return (
    <div className={styles.movieDetailWrapper}>
            {movie && (
        <MovieCard
        Title={movie.Title}
        Year={movie.Year}
        Type={movie.Type}
        Poster={movie.Poster}
        imdbID={movie.imdbID}
        />
      )}
      {
         movie && 
        <div className={styles.movieDetail}>
          <div>
            Plot : {movie.Plot}
          </div>
          <div>
            Actors : {movie.Actors}
          </div>
          <div>
            Genre : {genreInArray.map((genre) => {
              return <span key={genre} className={styles.genre}>{genre}</span>
            })}
          </div>
          <div>
            <Rating items={10} style={{ maxWidth: 400 }} value={Math.floor(movie.imdbRating)} />
          </div>
      </div>
      }

    </div>
  );
}

export default MovieDetails;
