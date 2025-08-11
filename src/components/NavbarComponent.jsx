import { useRef } from "react";
import styles from "../style/navbar.module.css";
function NavbarComponent() {
  const resultListRef = useRef(null);

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
        />
        <div id={styles.resultList} ref={resultListRef}>
          <div className={styles.autocompleteResult}>Result One</div>
          <div className={styles.autocompleteResult}>Result Two</div>
          <div>Result Three</div>
        </div>
      </div>
      <div>Theme</div>
    </div>
  );
}

export default NavbarComponent;
