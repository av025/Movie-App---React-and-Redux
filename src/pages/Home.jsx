import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { movieSearch } from "../apis/omdb";
import styles from "../style/home.module.css";
import axios from "axios";

function Home() {
  const [movieList, setMovieList] = useState([]);

  async function getMoviesList(...args) {
    const urls = args.map((name) => movieSearch(name) ); 
    const response = await axios.all(urls.map(url => axios.get(url)));
    const movies = response.map(movieResponse => movieResponse.data.Search) 
    setMovieList( [].concat(...movies));
  }


  useEffect(() => {
    getMoviesList("harry", "batman", "titanic");
  }, []);
  return (
    <div className={styles.movieCardWrapper}>
      {movieList.map((movies) => {
        return <MovieCard key={movies.imdbID} {...movies} />
      })}
    </div>
  );
}

export default Home;
