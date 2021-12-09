import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './rootStack';

export const ROUTE_MOVIES = 'MOVIES';

export type MoviesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof ROUTE_MOVIES
>;
