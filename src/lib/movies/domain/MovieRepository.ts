import {Movie} from "./Movie";

export interface MovieRepository {
  // save(movie: Movie): void;
  // search(id: string): Movie | undefined;
  all(): Movie[];
}
