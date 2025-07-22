import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { translateText } from '../services/api';

export default function TranslatorScreen() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('Spanish');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleTranslate = async () => {
    if (!inputText) {
      console.log('Please enter text to translate');
      return;
    }
    setLoading(true);
    try {
      const result = await translateText(inputText, targetLanguage);
      setTranslatedText(result);
      console.log('Translation Request:', { inputText, targetLanguage, translatedText: result });
    } catch (error) {
      console.error('Error translating:', error);
      setTranslatedText('Translation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4 text-center`}>Translator</Text>
      <TextInput
        placeholder="Enter text to translate"
        value={inputText}
        onChangeText={setInputText}
        style={tw`mb-4`}
      />
      <View style={tw`flex-row justify-between mb-4`}>
        <Button
          title="Spanish"
          variant={targetLanguage === 'Spanish' ? 'primary' : 'secondary'}
          style={tw`flex-1 mr-2`}
          onPress={() => setTargetLanguage('Spanish')}
        />
        <Button
          title="French"
          variant={targetLanguage === 'French' ? 'primary' : 'secondary'}
          style={tw`flex-1 ml-2`}
          onPress={() => setTargetLanguage('French')}
        />
      </View>
      <Text style={tw`text-lg mb-4`}>Translated Text: {translatedText || '(Waiting for translation)'}</Text>
      <Button
        title={loading ? 'Translating...' : 'Translate'}
        onPress={handleTranslate}
        disabled={loading}
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