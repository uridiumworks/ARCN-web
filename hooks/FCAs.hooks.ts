import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useToast } from "./use-toast"; // Import the useToast hook

const useFCAsData = (token: string | null, triggerRefetch?: boolean) => {
  const [fcas, setFcas] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("FCAData");
      return savedData ? JSON.parse(savedData) : [];
    }
    return []; // Return a default value for SSR
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI("odata/GetAllFCA", token as any);

        console.log(response);
        localStorage.setItem("FCAData", JSON.stringify(response)); // Save to localStorage
        setFcas(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch FCA data.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, fcas };
};

const useClientFCAsData = (token?: string | null, triggerRefetch?: boolean) => {
  const [fcas, setFcas] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("FCAData");
      return savedData ? JSON.parse(savedData) : [];
    }
    return []; // Return a default value for SSR
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI("/client/GetAllFCA", token as any);
        console.log(response);
        localStorage.setItem("FCAData", JSON.stringify(response)); // Save to localStorage
        setFcas(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch client FCA data.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, fcas };
};

const useFCAData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [fca, setFca] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetFCAById/${id}`,
          token as any
        );

        console.log(response);
        setFca(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch FCA data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, fca };
};

const useClientFCAData = (
  id: any,
  token?: string | null,
  triggerRefetch?: boolean
) => {
  const [fca, setFca] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `/client/GetFCAById/${id}`,
          token as any
        );

        console.log(response);
        setFca(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch client FCA data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, fca };
};

const useCreateFCA = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  const createFCA = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/FCA/CreateFCA",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging
      setData(response?.message);
      toast({
        description: "FCA created successfully.",
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

  return { createFCA, data, loading, error };
};

const useDeleteFCA = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const deleteFCA = async (id: string, closeDeleteDialogRef: any) => {
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

      const response = await deleteAPI(`/api/FCA/Delete/${id}`, token);
      setSuccess(response.success);
      toast({
        description: "FCA deleted successfully.",
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

  return { deleteFCA, loading, error, success };
};

const useUpdateFCA = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const updateFCA = async (id: any, payload: any) => {
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
        `/api/FCA/UpdateFCA/${id}`,
        payload,
        token as any
      );
      setSuccess(response.success);
      toast({
        description: "FCA updated successfully.",
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

  return { updateFCA, loading, error, success };
};

export {
  useFCAsData,
  useClientFCAsData,
  useFCAData,
  useClientFCAData,
  useCreateFCA,
  useDeleteFCA,
  useUpdateFCA,
};
