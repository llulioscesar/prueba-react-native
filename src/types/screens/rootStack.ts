import { ROUTE_MOVIE_DETAIL } from './detail';
import {ROUTE_MOVIES} from './movies';

export type RootStackParamList = {
  [ROUTE_MOVIES]: undefined;
  [ROUTE_MOVIE_DETAIL]: undefined;
} & {
  [Screen: string]: undefined;
};
