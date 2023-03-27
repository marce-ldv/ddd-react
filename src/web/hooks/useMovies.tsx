import {getAllMovies} from "../../lib/movies/application/getAllMovies";
import {FakeMoviesRepository} from "../../lib/movies/infrastructure/FakeMoviesRepository";

export const useMovies = () => {
  const moviesRepository = new FakeMoviesRepository();

  const getAllMoviesCb = () => {
    return getAllMovies(moviesRepository);
  }

  return { getAllMoviesCb };
}
