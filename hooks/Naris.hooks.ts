import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useToast } from "./use-toast"; // Import the useToast hook

const useNarissData = (token: string | null, triggerRefetch?: boolean) => {
  const [nariss, setNariss] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("narisData");
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
        const response: any = await getAPI("odata/GetAllNaris", token as any);

        console.log(response);
        localStorage.setItem("narisData", JSON.stringify(response)); // Save to localStorage
        setNariss(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch Naris data.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, nariss };
};

const useClientNarissData = (token?: string | null, triggerRefetch?: boolean) => {
  const [nariss, setNariss] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("narisData");
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
        const response: any = await getAPI("/client/GetAllNaris", token as any);

        console.log(response);
        localStorage.setItem("narisData", JSON.stringify(response)); // Save to localStorage
        setNariss(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch client Naris data.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, nariss };
};

const useClientNarisData = (
  id: any,
  token?: string | null,
  triggerRefetch?: boolean
) => {
  const [naris, setNaris] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `/client/GetNarisById/${id}`,
          token as any
        );

        console.log(response);
        setNaris(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch Naris data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, naris };
};

const useNarisData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [naris, setNaris] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetNarisById/${id}`,
          token as any
        );

        console.log(response);
        setNaris(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch Naris data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, naris };
};

const useCreateNaris = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  const createNaris = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/Naris/CreateNaris",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging
      setData(response?.message);
      toast({
        description: "Naris created successfully.",
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

  return { createNaris, data, loading, error };
};

const useDeleteNaris = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const deleteNaris = async (id: string, closeDeleteDialogRef: any) => {
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

      const response = await deleteAPI(`/api/Naris/Delete/${id}`, token);
      setSuccess(response.success);
      toast({
        description: "Naris deleted successfully.",
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

  return { deleteNaris, loading, error, success };
};

const useUpdateNaris = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const updateNaris = async (id: any, payload: any) => {
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
        `/api/Naris/UpdateNaris/${id}`,
        payload,
        token as any
      );
      setSuccess(response.success);
      toast({
        description: "Naris updated successfully.",
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

  return { updateNaris, loading, error, success };
};

export {
  useNarissData,
  useClientNarissData,
  useClientNarisData,
  useNarisData,
  useCreateNaris,
  useDeleteNaris,
  useUpdateNaris,
};
