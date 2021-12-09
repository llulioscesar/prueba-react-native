import React from 'react';
import {View} from 'react-native';
import {SearchTitleInput} from './searchTitleInput';
import {SearchTitleText} from './searchTitleText';

export const SearchTitle = () => {
  return (
    <View style={{backgroundColor: '#5ca0d3'}}>
      <SearchTitleText>Hola, ¿Qué quieres ver?</SearchTitleText>
      <SearchTitleInput placeholder="Buscar" placeholderTextColor="#c4dcee" />
    </View>
  );
};
