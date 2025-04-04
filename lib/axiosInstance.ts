import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const token = "b62834cc60ed25d37803583345b27aff4451c94205a2b6740a1aaed8f92735e306dcda3e100bdb86630ef6a1dbc46723e1667f7c3bcdddefdb9a4bbc88f5a44ec82e536fe8f3f9e1829c6cb2e8fd9be434dec4c7eebd6b107af6c1422a7346fd357e67f014b6f51bc863f080b0bf8f4055dc9deb5b1a0888c3e5bdd9fc6c6db8";

const axiosInstance = axios.create({
  baseURL,
});

// Add a request interceptor to attach the token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
