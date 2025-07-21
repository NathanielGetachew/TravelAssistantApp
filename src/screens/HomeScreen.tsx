import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Home Screen</Text>
      <Button
        title="Go to Trip Planner"
        onPress={() => navigation.navigate('TripPlanner')}
      />
      <Button
        title="Go to Translator"
        variant="secondary"
        style={tw`mt-4`}
        onPress={() => navigation.navigate('Translator')}
      />
    </View>
  );
}