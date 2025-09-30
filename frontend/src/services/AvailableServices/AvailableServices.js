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

const API_URL = 'http://localhost:5020/Services';

const registerService = async (serviceData) => {
  try {
    const response = await axios.post(`${API_URL}/register-service`, serviceData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const updateService = async (serviceData) => {
  try {
    const response = await axios.post(`${API_URL}/update-service`, serviceData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const getService = async (serviceId) => {
  try {
    const response = await axios.post(`${API_URL}/get-service`, { id: serviceId });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const deleteService = async (serviceId) => {
  try {
    const response = await axios.post(`${API_URL}/delete-service`, { id: serviceId });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const getAllServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-all-services`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export default {
  registerService,
  updateService,
  getService,
  deleteService,
  getAllServices
};
