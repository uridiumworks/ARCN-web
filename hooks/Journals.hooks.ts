import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState,useCallback } from "react";
import { useToast } from "./use-toast"; // Import the useToast hook
import {useRouter} from 'next/navigation'

const useJournalsData = (token: string | null) => {
  const [journals, setJournals] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("JournalData");
      return savedData ? JSON.parse(savedData) : [];
    }
    return []; // Return a default value for SSR
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

 
  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await getAPI("odata/GetJournals", token as any);

      console.log(response);
      localStorage.setItem("JournalData", JSON.stringify(response)); // Save to localStorage
      setJournals(response);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to fetch journals data.",
      });
    }
  },[token] )


  // console.log(triggerRefetch,"HIIII")

  return { loading, error, journals,fetchDashboard };
};

const useJournalData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [journal, setJournal] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetJournalById/${id}`,
          token as any
        );

        console.log(response);
        setJournal(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch journal data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, journal };
};

const useCreateJournal = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  const createJournal = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/Journals/CreateJournals",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging
      setData(response?.message);
      toast({
        description: "Journal created successfully.",
      });
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        setError(
          errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred"
        );
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
        setError("An unknown error occurred");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { createJournal, data, loading, error };
};

const useDeleteJournal = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const deleteJournal = async (id: string, closeDeleteDialogRef: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "No token found.",
        });
        return;
      }

      const response = await deleteAPI(`/api/Journals/Delete/${id}`, token);
      setSuccess(response.success);
      toast({
        description: "Journal deleted successfully.",
      });
      closeDeleteDialogRef?.current.click();
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        setError(
          errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred"
        );
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
        setError("An unknown error occurred");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { deleteJournal, loading, error, success };
};

const useUpdateJournal = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast
  const {push} = useRouter();

  const updateJournal = async (id: any, payload: any,url:string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!token) {
        setError("No token found");
        console.log("No token found");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "No token found.",
        });
        return;
      }

      const response = await putAPI(
        `/api/Journals/UpdateJournals/${id}`,
        payload,
        token as any
      );
      setSuccess(response.success);
      toast({
        description: "Journal updated successfully.",
      });
      push(url)
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        setError(
          errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred"
        );
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
        setError("An unknown error occurred");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { updateJournal, loading, error, success };
};

export {
  useJournalsData,
  useJournalData,
  useCreateJournal,
  useDeleteJournal,
  useUpdateJournal,
};
