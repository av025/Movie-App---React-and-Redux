import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useMoviesList } from "../hooks/useMovieList";
import styles from "../style/home.module.css";

function Home() {
  const { movieList } = useMoviesList("superman", "titanic", "batman");
  const [isListShown, setIsListShow] = useState(true);
  return (
    <div className={styles.movieCardWrapper}>
      {isListShown &&
        movieList.map((movies) => {
          return (
            <MovieCard
              key={movies.imdbID}
              {...movies}
              handleListShown={setIsListShow}
            />
          );
        })}
    </div>
  );
}

export default Home;
