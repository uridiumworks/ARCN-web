import axiosInstance from './axiosInstance';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Wrapper for POST requests with optional authentication.
 * @param url - The endpoint URL.
 * @param data - The payload for the POST request.
 * @param token - Optional JWT token for authorization.
 * @returns The response data from the server.
 * @throws Will throw an error if the request fails.
 */
export const postAPI = async (url: string, data: object, token?: string) => {
  try {
    const response = await axiosInstance.post(url, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (error) {
    handleAPIError(error, 'POST', url);
    throw error;
  }
};

/**
 * Wrapper for GET requests with optional authentication.
 * @param url - The endpoint URL.
 * @param token - Optional JWT token for authorization.
 * @returns The response data from the server.
 * @throws Will throw an error if the request fails.
 */
export const getAPI = async (url: string, token?: string) => {
  try {
    const response = await axiosInstance.get(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (error) {
    handleAPIError(error, 'GET', url);
    throw error;
  }
};

/**
 * Wrapper for PATCH requests with optional authentication.
 * @param url - The endpoint URL.
 * @param data - The payload for the PATCH request.
 * @param token - Optional JWT token for authorization.
 * @returns The response data from the server.
 * @throws Will throw an error if the request fails.
 */
export const patchAPI = async (url: string, data: object, token?: string) => {
  try {
    const response = await axiosInstance.patch(url, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (error) {
    handleAPIError(error, 'PATCH', url);
    throw error;
  }
};

/**
 * Wrapper for PUT requests with optional authentication.
 * @param url - The endpoint URL.
 * @param data - The payload for the PUT request.
 * @param token - Optional JWT token for authorization.
 * @returns The response data from the server.
 * @throws Will throw an error if the request fails.
 */
export const putAPI = async (url: string, data: object, token?: string) => {
  try {
    const response = await axiosInstance.put(url, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (error) {
    handleAPIError(error, 'PUT', url);
    throw error;
  }
};

/**
 * Wrapper for DELETE requests with optional authentication.
 * @param url - The endpoint URL.
 * @param token - Optional JWT token for authorization.
 * @returns The response data from the server.
 * @throws Will throw an error if the request fails.
 */
export const deleteAPI = async (url: string, token?: string) => {
  try {
    const response = await axiosInstance.delete(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (error) {
    handleAPIError(error, 'DELETE', url);
    throw error;
  }
};

/**
 * Centralized error handler for API requests.
 * Logs the error and method, and can be extended for additional error tracking.
 * @param error - The error object caught from the request.
 * @param method - The HTTP method used (POST, GET, etc.).
 * @param url - The endpoint URL where the error occurred.
 */
const handleAPIError = (error: any, method: string, url: string) => {
    // Extract the error message from the error object
    let errorMessage = 'An unknown error occurred';
  
    if (error.response) {
      // If there is a response, extract error message
      if (error.response.data && error.response.data.errors && Array.isArray(error.response.data.errors)) {
        errorMessage = error.response.data.errors.join(', ');
      } else if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
    } else if (error.message) {
      // If no response, fall back to error message
      errorMessage = error.message;
    }
  
    console.error(`[API ${method}] Error at ${url}: ${errorMessage}`);
  
    // Additional error handling logic (e.g., transform error message, log to a service) can go here.
  };
