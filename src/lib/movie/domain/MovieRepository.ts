import { Movie } from "./Movie";

export interface MovieRepository {
  all(): Promise<Movie[]>;
}
