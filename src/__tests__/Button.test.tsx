import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders correctly with primary variant', () => {
    const { getByText } = render(<Button title="Test Button" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('renders correctly with secondary variant', () => {
    const { getByText } = render(<Button title="Test Button" variant="secondary" />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button title="Test Button" onPress={onPress} />);
    fireEvent.press(getByText('Test Button'));
    expect(onPress).toHaveBeenCalled();
  });
});