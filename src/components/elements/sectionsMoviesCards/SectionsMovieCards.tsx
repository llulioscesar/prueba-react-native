import React, {FC} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {SectionsMoviesCardsProps} from '../../../types/components';
import MovieCard from '../movieCard';
import {SectionsMoviesCardsTitle} from './SectionsMoviesCardsTitle';

export const SectionMoviesCards: FC<SectionsMoviesCardsProps> = props => {
  const {movies, onClick, title} = props;

  const handleClick = (id: number) => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <View style={style.section}>
      <SectionsMoviesCardsTitle>{title}</SectionsMoviesCardsTitle>
      <ScrollView horizontal={true}>
        <View style={style.contentCards}>
          {movies.map((movie, key) => (
            <MovieCard key={key} movie={movie} onClick={handleClick} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  section: {paddingBottom: 16, paddingTop: 16},
  contentCards: {flex: 1, flexDirection: 'row', paddingHorizontal: 16},
});
