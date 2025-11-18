import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GameplaysScreen from '../screens/GameplaysScreen';
import TopGlobalesScreen from '../screens/TopGlobalesScreen';
import EasterEggsScreen from '../screens/EasterEggsScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#16213e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gameplays"
        component={GameplaysScreen}
        options={{
          title: 'Gamplays',
        }}
      />
      <Stack.Screen
        name="TopGlobales"
        component={TopGlobalesScreen}
        options={{
          title: 'Top Globales',
        }}
      />
      <Stack.Screen
        name="EasterEggs"
        component={EasterEggsScreen}
        options={{
          title: 'Easter Eggs',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

