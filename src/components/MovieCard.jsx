import { useNavigate } from "react-router-dom";
import styles from "../style/movie-card.module.css";

function MovieCard({ Title, Year, imdbID, Type, Poster }) { 
 
const  navigate = useNavigate(); 

 function handleNavigation() {
     navigate(`/movie/${imdbID}`);
 }

  return (
    <div onClick={handleNavigation} className={styles.movieCardWrapper}>
      <div className={styles.cardImage}>
        <img src={Poster} alt={Title} />
      </div>
      <div className={styles.movieTitle}>
        <span>{Title}</span>
      </div>
      <div className={styles.movieYear}>
        <span>Release Year :{Year}</span>
      </div>
      <div className={styles.movieType}>
        <span>Type : {Type}</span>
      </div>
    </div>
  );
}

export default MovieCard;
