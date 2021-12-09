import {Movie} from '../data';

export type MovieCardProps = {
  movie: Movie;
  onClick: (movieId: number) => void;
};
