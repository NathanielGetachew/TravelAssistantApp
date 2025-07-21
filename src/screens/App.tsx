import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TripPlannerScreen from './TripPlannerScreen';
import TranslatorScreen from './TranslatorScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TripPlanner" component={TripPlannerScreen} />
        <Stack.Screen name="Translator" component={TranslatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}