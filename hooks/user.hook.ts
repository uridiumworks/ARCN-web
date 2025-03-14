import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { deleteAPI, getAPI, postAPI } from '@/lib/Axios';
import axiosInstance from '@/lib/axiosInstance';
import { useRouter } from 'next/navigation';

interface LoginResponse {
  success: boolean;
  message?: string;
  data?: {
    token?: string;
    [key: string]: any;
  };
  errors?: string[];
}

interface LoginPayload {
  email: string;
  password: string;
}
interface CreateUserPayload {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
  }
  
  interface CreateUserResponse {
    success: boolean;
    message?: string;
    data?: any; // Adjust this type if you expect a specific structure for the response
    errors?: string[];
  }

  interface GetAllUsersResponse {
    success: boolean;
    message?: string;
    data?: any[]; // Adjust this type based on your response structure
    errors?: string[];
  }

  interface DeleteUserResponse {
    success: boolean;
    message?: string;
    errors?: string[];
  }
  
 
  
  
  const useGetAllUsers = (triggerRefetch : boolean) => {
    const [users, setUsers] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const token = localStorage.getItem('userToken');
          if (!token) {
            setError('No token found');
            return;
          }
  
          const response = await getAPI('/odata/GetAllUsers', token);
          console.log("🚀 ~ fetchUsers ~ response:", response)
          setUsers(response.data);
        } catch (err) {
          if (err instanceof AxiosError && err.response) {
            const errorResponse = err.response.data as GetAllUsersResponse;
            setError(errorResponse.errors ? errorResponse.errors.join(', ') : errorResponse.message || 'An unknown error occurred');
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, [triggerRefetch]);
  
    return { users, loading, error };
  };
  
  const useCreateUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<CreateUserResponse | null>(null);
  
    const createUser = async (payload: CreateUserPayload) => {
      setLoading(true);
      setError(null);
  
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          setError('No token found');
          return;
        }
  
        const response = await postAPI('/api/User/CreateUser', payload, token);
        console.log('Create User response:', response); // Debugging
  
        setData(response);
      } catch (err) {
        if (err instanceof AxiosError && err.response) {
          const errorResponse = err.response.data as CreateUserResponse;
          setError(errorResponse.errors ? errorResponse.errors.join(', ') : errorResponse.message || 'An unknown error occurred');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
  
    return { createUser, data, loading, error };
  };
const useLoginUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<LoginResponse | null>(null);
  const {push} = useRouter()
    const login = async (payload: LoginPayload) => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await axiosInstance.post('/api/User/LoginUser', payload);
        console.log('API response:', response); // Debugging
  
        if (response?.data?.success && response?.data?.data?.token && response.data.statusCode === 0) {
          // Save token and user info to localStorage
          localStorage.setItem('userToken', response.data?.data?.token);
          localStorage.setItem('userData', JSON.stringify(response.data?.data)); // Optionally store other user data
          push('/admin');
          setData(response.data?.data);
        }else {
          throw new Error(response.data?.message || response.data?.errors)
        }
      } catch (err:any) {
        if (err instanceof AxiosError && err.response) {
          const errorResponse = err.response.data as LoginResponse;
          setError(errorResponse.errors ? errorResponse.errors.join(', ') : errorResponse.message || 'An unknown error occurred');
        } else {
          setError(err.message)
        }
      } finally {
        setLoading(false);
      }
    };
  
    return { login, data, loading, error };
  };

const useUserProfile = () => {
    const [profile, setProfile] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProfile = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const token = localStorage.getItem('userToken');
          if (!token) {
            setError('No token found');
            return;
          }
  
          const response = await getAPI('/api/User/GetProfile', token );
          setProfile(response.data);
        } catch (err) {
          if (err instanceof AxiosError && err.response) {
            setError(err.response.data.message || 'An error occurred');
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };
  
      fetchProfile();
    }, []);
  
    return { profile, loading, error };
  };

  const useDeleteUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
  
    const deleteUser = async (id: string) => {
      setLoading(true);
      setError(null);
      setSuccess(false);
  
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          setError('No token found');
          return;
        }
  
        const response = await deleteAPI(`/api/User/DeleteUser/${id}`, token);
        setSuccess(response.success);
      } catch (err) {
        if (err instanceof AxiosError && err.response) {
          const errorResponse = err.response.data as DeleteUserResponse;
          setError(errorResponse.errors ? errorResponse.errors.join(', ') : errorResponse.message || 'An unknown error occurred');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
  
    return { deleteUser, loading, error, success };
  };

export { useLoginUser, useUserProfile, useCreateUser, useGetAllUsers, useDeleteUser };
