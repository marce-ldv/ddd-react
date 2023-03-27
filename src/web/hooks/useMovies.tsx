import {container} from "tsyringe";
import {GetAllMovies} from "../../lib/movie/application/getAllMovies";

// controller or presentation layer
export const useMovies = () => {
  const getAllMovies = container.resolve(GetAllMovies)

  return { getAllMovies };
}
