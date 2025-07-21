import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function TripPlannerScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold`}>Trip Planner Screen</Text>
    </View>
  );
}