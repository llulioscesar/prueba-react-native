import {Movie} from '../data';

export type SectionsMoviesCardsProps = {
  onClick: (id: number) => void;
  movies: Movie[];
  title: string;
};
