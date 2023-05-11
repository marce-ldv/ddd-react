import { MovieRepository } from "../domain/MovieRepository";
import { Movie } from "../domain/Movie";

export class FakeMoviesRepository implements MovieRepository {
  private movies: Movie[] = [
    new Movie("1", "The Shawshank Redemption", 1994),
    new Movie("2", "The Godfather", 1972),
    new Movie("3", "The Godfather: Part II", 1974),
    new Movie("4", "The Dark Knight", 2008),
  ];

  public save(movie: Movie): void {
    this.movies.push(movie);
  }

  public search(id: string): Movie | undefined {
    return this.movies.find((movie) => movie.getId() === id);
  }

  public async all(): Promise<Movie[]> {
    return this.movies;
  }
}
