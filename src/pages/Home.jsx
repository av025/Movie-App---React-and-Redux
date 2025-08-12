import MovieCard from "../components/MovieCard";
import { useMoviesList } from "../hooks/useMovieList";
import styles from "../style/home.module.css";


function Home() {
 const {movieList} =  useMoviesList("superman", "titanic", "batman"); 
  return (
    <div className={styles.movieCardWrapper}>
      {movieList.map((movies) => {
        return <MovieCard key={movies.imdbID} {...movies} />
      })}
    </div>
  );
}

export default Home;
