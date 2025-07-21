import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Mock API
});

export interface TripSuggestion {
  id: number;
  title: string;
  body: string;
}

export const fetchTripSuggestions = async (destination: string): Promise<TripSuggestion[]> => {
  // Simulate fetching trip suggestions based on destination
  const response = await api.get('/posts', {
    params: { query: destination }, // JSONPlaceholder doesn't use this, but included for realism
  });
  return response.data.slice(0, 3); // Return first 3 results for simplicity
};