import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { deleteAPI, getAPI, postAPI } from '@/lib/Axios';
import { useToast } from './use-toast'; // Import the useToast hook
import { useRouter } from 'next/navigation';

export function useForgotPassword(){
  const [isLoading,setIsLoading] = useState(false);
  const {toast} = useToast();
  const {push} = useRouter()

  async function forgotPassword(email:string){

    setIsLoading(true)
    try {
      

      const response = await postAPI("User/ForgotPassword",{email})
      console.log(response)
      push("/")
      
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    } finally {
      setIsLoading(false)
    }
  }
}

export function useResetPassword(){

  const [isLoading,setIsLoading] = useState(false);

}
