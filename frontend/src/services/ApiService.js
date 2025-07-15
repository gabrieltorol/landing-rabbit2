import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getCourses = () => {
  return apiClient.get('/courses');
};

export const sendContactMessage = (data) => {
  return apiClient.post('/contact', data);
};

export default apiClient; 