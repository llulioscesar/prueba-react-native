import React, {FC, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {themeDark, themeLight, ThemeProvider} from '../components/elements';
import {RootState} from '../redux';

export const MovieDetailScreen: FC = () => {
  const theme = useColorScheme();

  const [currentTheme, setTheme] = useState(
    theme === 'dark' ? themeDark : themeLight,
  );
  const {detail, credits} = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    setTheme(theme === 'dark' ? themeDark : themeLight);
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <SafeAreaView
        style={[
          style.screen,
          {
            backgroundColor: currentTheme.bodyColor,
          },
        ]}>
        <Image
          style={{
            width: '100%',
            height: 250,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${detail?.backdrop_path}`,
          }}
        />
        <Text
          style={{
            color: currentTheme.text1Color,
            fontSize: 25,
            paddingHorizontal: 8,
            marginTop: 20,
            marginBottom: 40,
          }}>
          {detail?.title}
        </Text>
        <Text
          style={{
            color: currentTheme.text2Color,
            fontSize: 14,
            paddingHorizontal: 8,
            lineHeight: 25,
            marginBottom: 40,
          }}>
          {detail?.overview}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 8,
            marginBottom: 20,
          }}>
          {credits?.cast &&
            credits?.cast.map((actor, key) => {
              if (key < 4) {
                return (
                  <View key={key} style={{alignItems: 'center'}}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 100,
                        marginBottom: 10,
                      }}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
                      }}
                    />
                    <Text style={{color: currentTheme.text2Color}}>
                      {actor.name}
                    </Text>
                  </View>
                );
              }
              return null;
            })}
        </View>

        <View style={{flexDirection: 'row', paddingLeft: 8}}>
          <View style={{width: 60}}>
            <Text style={{fontWeight: 'bold', color: currentTheme.text1Color}}>
              Estudio
            </Text>
          </View>
          <Text style={{color: currentTheme.text2Color}}>
            {detail?.production_companies[0].name}
          </Text>
        </View>

        <View style={{flexDirection: 'row', paddingLeft: 8}}>
          <View style={{width: 60}}>
            <Text style={{fontWeight: 'bold', color: currentTheme.text1Color}}>
              Genero
            </Text>
          </View>
          <Text style={{color: currentTheme.text2Color}}>
            {detail?.genres.map(genre => genre.name + ' ')}
          </Text>
        </View>

        <View style={{flexDirection: 'row', paddingLeft: 8}}>
          <View style={{width: 60}}>
            <Text style={{fontWeight: 'bold', color: currentTheme.text1Color}}>
              Fecha
            </Text>
          </View>
          <Text style={{color: currentTheme.text2Color}}>
            {detail?.release_date}
          </Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const style = StyleSheet.create({
  screen: {
    minHeight: '100%',
  },
});
