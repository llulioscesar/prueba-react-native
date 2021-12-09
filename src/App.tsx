import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// REDUX
import {persistor, store} from './redux';
import {Provider as ReduxProvider} from 'react-redux';

// REDUX-PERSIST
import {PersistGate} from 'redux-persist/integration/react';
import {RootStackParamList, ROUTE_MOVIES} from './types/screens';
import {MovieDetailScreen, MoviesScreen} from './screens';
import { ROUTE_MOVIE_DETAIL } from './types/screens/detail';

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTE_MOVIES}>
              <Stack.Screen
                name={ROUTE_MOVIES}
                component={MoviesScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={ROUTE_MOVIE_DETAIL}
                component={MovieDetailScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
