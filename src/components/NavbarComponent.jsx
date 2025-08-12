import { useRef, useState } from "react";
import styles from "../style/navbar.module.css";
import { useMoviesList } from "../hooks/useMovieList";
import { useDebounce } from "../hooks/useDebounce";
function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const resultListRef = useRef(null);
  const { movieList } = useMoviesList(searchTerm);

  return (
    <div className={styles.navbarWrapper}>
      <div>Movie Base</div>
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
          <div className={styles.autocompleteResult}>Auto Complete Result....</div>
          {movieList.length > 0 &&
            movieList.map((movie) => {
              return (
                <div className={styles.autocompleteResult} key={movie.imdbID}>
                  {movie.Title}
                </div>
              );
            })}
        </div>
      </div>
      <div>Theme</div>
    </div>
  );
}

export default NavbarComponent;
