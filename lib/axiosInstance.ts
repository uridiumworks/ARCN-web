import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL, // Set the base URL from the environment variable
  // You can add other default configurations here, like headers
});

export default axiosInstance;
