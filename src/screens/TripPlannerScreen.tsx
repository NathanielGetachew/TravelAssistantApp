import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default function TripPlannerScreen() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4 text-center`}>Plan Your Trip</Text>
      <TextInput
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
        style={tw`mb-4`}
      />
      <TextInput
        placeholder="Start Date (YYYY-MM-DD)"
        value={startDate}
        onChangeText={setStartDate}
        style={tw`mb-4`}
      />
      <TextInput
        placeholder="End Date (YYYY-MM-DD)"
        value={endDate}
        onChangeText={setEndDate}
        style={tw`mb-4`}
      />
      <Button
        title="Plan Trip"
        onPress={() => {
          console.log('Trip Details:', { destination, startDate, endDate });
        }}
      />
      <Button
        title="Back to Home"
        variant="secondary"
        style={tw`mt-4`}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}