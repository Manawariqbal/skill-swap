import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Sign Up
export const signUp = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

// Sign In
export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
