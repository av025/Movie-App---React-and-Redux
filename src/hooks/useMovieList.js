import axios from "axios";
import { useEffect, useState } from "react";
import { movieSearch } from "../apis/omdb";

export function useMoviesList(...args) {
  const [movieList, setMovieList] = useState([]);

  async function getMoviesList(...args) {
    try {
      const urls = args.map((name) => movieSearch(name));
      const response = await axios.all(urls.map((url) => axios.get(url)));
      if(response[0].data.Error) { 
        setMovieList([]); 

    } else {

        const movies = response.map((movieResponse) => movieResponse.data.Search);
        setMovieList([].concat(...movies));
    }
    } catch (error) {
        console.log(error.message)
    }
  }

  useEffect(() => {
    getMoviesList(...args);
  }, [...args]);

  return { movieList };
}
