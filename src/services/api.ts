import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', 
  headers: {
    'Content-Type': 'application/json',
  },
});


export const get = async <T>(endpoint: string, params?: any): Promise<T> => {
  try {
    const response = await api.get<T>(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
};

// Function to handle POST requests
export const post = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response = await api.post<T>(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error in POST request:', error);
    throw error;
  }
};

// Function to handle PUT requests
export const put = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response = await api.put<T>(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error in PUT request:', error);
    throw error;
  }
};

// Function to handle DELETE requests
export const remove = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await api.delete<T>(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error in DELETE request:', error);
    throw error;
  }
};

export default {
  get,
  post,
  put,
  remove,
};
