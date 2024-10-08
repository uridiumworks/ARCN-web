import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { deleteAPI, getAPI, postAPI } from '@/lib/Axios';
import { useToast } from './use-toast'; // Import the useToast hook

const useResetPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const { toast } = useToast(); // Initialize toast

  const resetPassword = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('userToken');
      if (!token) {
        setError('No token found');
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "No token found.",
        });
        return;
      }

      const response = await postAPI('/api/User/ResetPassword', { ...payload, token: token }, token);
      console.log('ResetPassword response:', response); // Debugging

      setData(response);
      toast({
        description: "Password reset successfully.",
      });
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data as any;
        setError(errorResponse.errors ? errorResponse.errors.join(', ') : errorResponse.message || 'An unknown error occurred');
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors ? errorResponse.errors.join(', ') : errorResponse.message || "An unknown error occurred",
        });
      } else {
        setError('An unknown error occurred');
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { resetPassword, data, loading, error };
};

export { useResetPassword };
