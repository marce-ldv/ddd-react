import { useEffect, useState } from "react";
import { Movie } from "../../../lib/movie/domain/Movie";
import { useMovies } from "../../hooks/useMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { getAllMovies } = useMovies();

  useEffect(() => {
    getAllMovies.execute().then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <h2>Movies description</h2>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <p>sdaasdsda</p>
        </div>
      ))}
    </>
  );
};

export default MoviesPage;
