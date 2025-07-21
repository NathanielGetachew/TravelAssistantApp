import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { fetchTripSuggestions, TripSuggestion } from '../services/api';

export default function TripPlannerScreen() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [suggestions, setSuggestions] = useState<TripSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePlanTrip = async () => {
    if (!destination) {
      console.log('Please enter a destination');
      return;
    }
    setLoading(true);
    try {
      const data = await fetchTripSuggestions(destination);
      setSuggestions(data);
      console.log('Trip Details:', { destination, startDate, endDate, suggestions: data });
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

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
        title={loading ? 'Loading...' : 'Plan Trip'}
        onPress={handlePlanTrip}
        disabled={loading}
      />
      <Button
        title="Back to Home"
        variant="secondary"
        style={tw`mt-4`}
        onPress={() => navigation.navigate('Home')}
      />
      {suggestions.length > 0 && (
        <View style={tw`mt-4`}>
          <Text style={tw`text-lg font-semibold mb-2`}>Trip Suggestions:</Text>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={tw`p-2 border-b border-gray-200`}>
                <Text style={tw`text-base font-medium`}>{item.title}</Text>
                <Text style={tw`text-sm text-gray-600`}>{item.body}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}