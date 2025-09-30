import axios from 'axios';

// Adiciona o token JWT em todas as requisições, se existir
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('tokenJwt');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const API_URL = 'http://localhost:5020/Companies';

const getAllCompanies = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-companies`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export default {
  getAllCompanies
};
