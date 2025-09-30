import axios from 'axios';

const API_URL = 'http://localhost:5020/Appointments';

const registerAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_URL}/register-appointment`, appointmentData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const getAllAppointmentsBySchedule = async (scheduleId) => {
  try {
    const response = await axios.get(`${API_URL}/get-all-appointments-by-schedule`, { params: { scheduleId } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const getAppointment = async (appointmentId) => {
  try {
    const response = await axios.post(`${API_URL}/get-appointment`, { id: appointmentId });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

const cancelAppointment = async (appointmentId) => {
  try {
    const response = await axios.post(`${API_URL}/cancel-appointment`, { id: appointmentId });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export default {
  registerAppointment,
  getAllAppointmentsBySchedule,
  getAppointment,
  cancelAppointment
};
