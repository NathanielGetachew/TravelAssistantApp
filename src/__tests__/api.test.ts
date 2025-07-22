import axios from 'axios';
import { fetchTripSuggestions } from '../services/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchTripSuggestions', () => {
  it('fetches trip suggestions successfully', async () => {
    const mockData = [
      { id: 1, title: 'Trip 1', body: 'Details 1' },
      { id: 2, title: 'Trip 2', body: 'Details 2' },
      { id: 3, title: 'Trip 3', body: 'Details 3' },
      { id: 4, title: 'Trip 4', body: 'Details 4' },
    ];
    mockedAxios.get.mockResolvedValue({ data: mockData });
    const suggestions = await fetchTripSuggestions('Hossana');
    expect(suggestions).toEqual(mockData.slice(0, 3));
    expect(mockedAxios.get).toHaveBeenCalledWith('/posts', {
      params: { query: 'Hossana' },
    });
  });

  it('handles API error', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));
    await expect(fetchTripSuggestions('Hossana')).rejects.toThrow('Network Error');
  });
});