import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL, // Set the base URL from the environment variable
  // You can add other default configurations here, like headers
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     if (config?.data?.toString() === "[object FormData]") {
//       config.headers["Content-Type"] = "multipart/form-data";
//     } else {
//       config.headers["Content-Type"] = "application/json";
//     }
//     // Do something before request is sent

//     // config.data = `${config.data}`;

//     return config;
//   },
//   function (error) {
//     // Do something with request error

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
