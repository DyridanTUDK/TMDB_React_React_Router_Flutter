import { useState, useEffect } from "react";
export default function useMovieSearch(apiPath, id) {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}${movie_id}?api_key=439c0e0b63fb21e259978448b0ee7b9b`;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
}
