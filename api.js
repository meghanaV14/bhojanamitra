// src/api/api.js
import axios from 'axios';

// ✅ Create a custom axios instance (optional but useful)
const API = axios.create({
  baseURL: 'http://localhost:5000', // or '' if frontend and backend are on same domain
  withCredentials: true,            // Enable if your backend uses sessions/cookies
});

// ✅ Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await API.post('/api/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ✅ Function to register a user
export const registerUser = async (data) => {
  try {
    const response = await API.post('/api/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
