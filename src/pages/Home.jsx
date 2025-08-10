import MovieCard from "../components/MovieCard";
import  styles from "../style/home.module.css"; 


function Home() {
    return <div className={styles.movieCardWrapper}>
    <MovieCard/>
    </div>
}

export default Home; 