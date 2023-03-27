import {MovieRepository} from "../domain/MovieRepository";
import {Movie} from "../domain/Movie";

export const getAllMovies = async (repository: MovieRepository): Promise<Movie[]> => {
  return repository.all();
}
