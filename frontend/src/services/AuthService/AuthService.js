import axios from 'axios';

const API_URL = 'http://localhost:5020/Users';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login-user`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register-user`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export default {
  login,
  register,
};
