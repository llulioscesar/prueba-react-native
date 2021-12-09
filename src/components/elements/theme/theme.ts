import * as styledComponents from 'styled-components/native';

export const themeLight: styledComponents.DefaultTheme = {
  bodyColor: '#fff',
  text1Color: '#000',
  text2Color: '#303030',
};

export const themeDark: styledComponents.DefaultTheme = {
  bodyColor: '#2c3847',
  text1Color: 'white',
  text2Color: '#80878f',
};

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<styledComponents.DefaultTheme>;

export {css, ThemeProvider};
export default styled;
