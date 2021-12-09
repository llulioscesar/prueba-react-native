import React, {FC} from 'react';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import {MovieCardProps} from '../../../types/components';
import {MovieCardTitle} from './MovieCardTitle';

export const MovieCard: FC<MovieCardProps> = props => {
  const {movie, onClick} = props;

  const handleClick = () => {
    if (onClick) {
      onClick(movie.id);
    }
  };

  return (
    <Pressable onPress={handleClick}>
      <View style={style.card}>
        <Image
          style={style.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          }}
        />
        <MovieCardTitle numberOfLines={1}>{movie.title}</MovieCardTitle>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  card: {marginRight: 5, marginLeft: 5},
  poster: {width: 150, height: 200, resizeMode: 'cover', borderRadius: 16},
});
