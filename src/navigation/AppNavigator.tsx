import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';
import {DetailsScreen} from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['movie://'],
  config: {
    screens: {
      Details: {
        path: 'details/:movieId',
        parse: {
          movieId: (movieId: string) => parseInt(movieId),
        },
      },
    },
  },
};

export function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Movie Details', headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

