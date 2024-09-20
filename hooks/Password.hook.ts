import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { deleteAPI, getAPI, postAPI } from '@/lib/Axios';

const useResetPassword = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any>(null);
  
    const resetPassword = async (payload: any) => {
      setLoading(true);
      setError(null);
  
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          setError('No token found');
          return;
        }
  
        const response = await postAPI('/api/User/ResetPassword', {...payload, token: token}, token);
        console.log('ResetPassword response:', response); // Debugging
  
        setData(response);
      } catch (err) {
        if (err instanceof AxiosError && err.response) {
          const errorResponse = err.response.data as any;
          setError(errorResponse.errors ? errorResponse.errors.join(', ') : errorResponse.message || 'An unknown error occurred');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
  
    return { resetPassword, data, loading, error };
  };

export { useResetPassword };
