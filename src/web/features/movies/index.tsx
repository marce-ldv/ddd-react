import {useEffect, useState} from "react";
import {Movie} from "../../../lib/movies/domain/Movie";
import {useMovies} from "../../hooks/useMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { getAllMoviesCb } = useMovies();

  useEffect(() => {
    getAllMoviesCb().then((movies) => setMovies(movies));
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
