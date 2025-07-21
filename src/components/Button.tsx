import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import tw from 'twrnc';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ title, variant = 'primary', style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={tw.style(
        'p-3 rounded-lg',
        variant === 'primary' ? 'bg-blue-500' : 'bg-gray-300',
        style
      )}
      {...props}
    >
      <Text style={tw.style(
        'text-center text-lg',
        variant === 'primary' ? 'text-white' : 'text-black'
      )}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}