import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold`}>Home Screen</Text>
      <TouchableOpacity
        style={tw`mt-4 p-2 bg-blue-500 rounded`}
        onPress={() => navigation.navigate('TripPlanner')}
      >
        <Text style={tw`text-white`}>Go to Trip Planner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`mt-4 p-2 bg-blue-500 rounded`}
        onPress={() => navigation.navigate('Translator')}
      >
        <Text style={tw`text-white`}>Go to Translator</Text>
      </TouchableOpacity>
    </View>
  );
}