import {container} from "tsyringe";
import {FakeMoviesRepository} from "../../../../movie/infrastructure/FakeMoviesRepository";
import {GetAllMovies} from "../../../../movie/application/getAllMovies";

export const bindFake = () => {
  container.register("MovieRepository", {
    useClass: FakeMoviesRepository,
  });

  container.register<GetAllMovies>(GetAllMovies, {
    useClass: GetAllMovies,
  })

  return container;
}
