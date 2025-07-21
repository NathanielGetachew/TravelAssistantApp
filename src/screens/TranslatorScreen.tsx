import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function TranslatorScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold`}>Translator Screen</Text>
    </View>
  );
}