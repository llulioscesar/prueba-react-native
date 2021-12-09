import {Credits, Movie, MovieDetail} from '../data';

export type MoviesState = {
  popular: Movie[];
  topRate: Movie[];
  loading: boolean;
  error: string | null;
  detail: MovieDetail | null;
  credits: Credits | null;
};
