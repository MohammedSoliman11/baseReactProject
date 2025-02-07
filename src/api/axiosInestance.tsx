import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mahmoudosama31-001-site1.ltempurl.com/api', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // You can add custom headers or tokens here
    // config.headers['Authorization'] = 'Bearer token';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
