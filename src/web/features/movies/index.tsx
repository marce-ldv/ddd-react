import {useEffect, useState} from "react";
import { getAllMovies } from "../../../lib/movies/application/getAllMovies";
import {Movie} from "../../../lib/movies/domain/Movie";
import {CachedMoviesRepository} from "../../../lib/movies/infrastructure/CachedMoviesRepository";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getAllMovies(new CachedMoviesRepository()).then(data => {
      setMovies(data);
    })
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
