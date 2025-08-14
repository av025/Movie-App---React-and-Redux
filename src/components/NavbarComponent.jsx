import { useRef, useState } from "react";
import styles from "../style/navbar.module.css";
import { useMoviesList } from "../hooks/useMovieList";
import { useDebounce } from "../hooks/useDebounce";
import { Link, useNavigate } from "react-router-dom";
import ThemeComponent from "./ThemeComponent";


function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const resultListRef = useRef(null);
  const { movieList } = useMoviesList(searchTerm);

  const navigator = useNavigate();
  function handleAutoComplete(event, movieImdbID) {
    event.stopPropagation();
    navigator(`movie/${movieImdbID}`);
  }

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.movieBaseTitle}>
        <Link to={"/"}>Movie Base</Link>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          id={styles.movieSearchInput}
          placeholder="What Movie Your are Thinking about...."
          onFocus={() => {
            resultListRef.current.style.display = "block";
          }}
          onBlur={() => {
            resultListRef.current.style.display = "none";
          }}
          onChange={useDebounce((event) => {
            setSearchTerm(event.target.value);
          })}
        />
        <div id={styles.resultList} ref={resultListRef}>
          <div className={styles.autocompleteResult}>
            Auto Complete Result....
          </div>
          {movieList.length > 0 &&
            movieList.map((movie) => {
              return (
                <div
                  className={styles.autocompleteResult}
                  key={movie.imdbID}
                  onMouseDown={(event) =>
                    handleAutoComplete(event, movie.imdbID)
                  }
                >
                  {movie.Title}
                </div>
              );
            })}
        </div>
      </div>
      <ThemeComponent />
    </div>
  );
}

export default NavbarComponent;
