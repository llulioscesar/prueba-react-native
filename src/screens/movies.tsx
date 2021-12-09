import React, {FC, useEffect} from 'react';
import {StyleSheet, SafeAreaView, useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import {
  getMovieCreditsThunk,
  getMovieDetailThunk,
  getMoviesPopularThunk,
  getMoviesTopRateThunk,
} from '../redux/movies';
import {SearchTitle} from '../components/containers/searchTitle';
import {
  Container,
  SectionsMoviesCards,
  themeDark,
  themeLight,
  ThemeProvider,
} from '../components/elements';
import {useNavigation} from '@react-navigation/native';
import {MoviesScreenNavigationProp} from '../types/screens';
import {ROUTE_MOVIE_DETAIL} from '../types/screens/detail';

export const MoviesScreen: FC = () => {
  const theme = useColorScheme();
  const navigator = useNavigation<MoviesScreenNavigationProp>();

  const dispatch = useDispatch();
  const {popular, topRate} = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(getMoviesPopularThunk(1));
    dispatch(getMoviesTopRateThunk(1));
  }, [dispatch]);

  const handleClickCard = (id: number) => {
    dispatch(getMovieCreditsThunk(id));
    dispatch(getMovieDetailThunk(id));
    navigator.push(ROUTE_MOVIE_DETAIL);
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <SafeAreaView style={style.screen}>
        <SearchTitle />
        <Container>
          <SectionsMoviesCards
            movies={popular}
            onClick={handleClickCard}
            title="Recomendadas"
          />
          <SectionsMoviesCards
            movies={topRate}
            onClick={handleClickCard}
            title="Mas valoradas"
          />
        </Container>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const style = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: 'white',
  },
});
