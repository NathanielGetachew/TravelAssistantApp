import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import tw from 'twrnc';

export default function TextInput(props: TextInputProps) {
  return (
    <RNTextInput
      style={tw`p-3 border border-gray-300 rounded-lg bg-white text-black`}
      placeholderTextColor={tw.color('text-gray-500')}
      {...props}
    />
  );
}