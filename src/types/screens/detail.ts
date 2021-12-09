import { StackNavigationProp } from "@react-navigation/stack";
import { ROUTE_MOVIES } from "./movies";
import { RootStackParamList } from "./rootStack";

export const ROUTE_MOVIE_DETAIL = 'MOVIES_DETAIL';

export type MovieDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof ROUTE_MOVIES
>;
