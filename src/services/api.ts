import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export interface TripSuggestion {
  id: number;
  title: string;
  body: string;
}

export const fetchTripSuggestions = async (destination: string): Promise<TripSuggestion[]> => {
  const response = await api.get('/posts', {
    params: { query: destination },
  });
  return response.data.slice(0, 3);
};

// Mock translation dictionary
const mockTranslations: Record<string, Record<string, string>> = {
  'How are you': {
    Spanish: '¿Cómo estás?',
    French: 'Comment vas-tu?',
  },
  'Hello': {
    Spanish: 'Hola',
    French: 'Bonjour',
  },
  'Thank you': {
    Spanish: 'Gracias',
    French: 'Merci',
  },
};

export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockTranslations[text]?.[targetLanguage] || `Translation not available for "${text}"`;
};