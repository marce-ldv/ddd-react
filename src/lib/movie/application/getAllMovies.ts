import {MovieRepository} from "../domain/MovieRepository";
import {Movie} from "../domain/Movie";
import {inject, injectable} from "tsyringe";

@injectable()
export class GetAllMovies {
  constructor(@inject("MovieRepository") private readonly repository: MovieRepository) {}

  public execute(): Promise<Movie[]> {
    return this.repository.all();
  }
}
