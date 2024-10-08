
import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useToast } from "./use-toast"; // Import the useToast hook

const useEntrepreneurshipsData = (token: string | null, triggerRefetch?: boolean) => {
  const [entrepreneurships, setEntrepreneurships] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("entrepreneurshipData");
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
        const response: any = await getAPI("odata/GetAllEntrepreneurship", token as any);

        console.log(response);
        localStorage.setItem("entrepreneurshipData", JSON.stringify(response)); // Save to localStorage
        setEntrepreneurships(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch entrepreneurship data.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, entrepreneurships };
};

const useClientEntrepreneurshipsData = (token?: string | null, triggerRefetch?: boolean) => {
  const [entrepreneurships, setEntrepreneurships] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("entrepreneurshipData");
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
        const response: any = await getAPI("/client/GetAllEntrepreneurship", token as any);

        console.log(response);
        localStorage.setItem("entrepreneurshipData", JSON.stringify(response)); // Save to localStorage
        setEntrepreneurships(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch client entrepreneurship data.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, entrepreneurships };
};

const useEntrepreneurshipData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [entrepreneurship, setEntrepreneurship] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetEntrepreneurshipById/${id}`,
          token as any
        );

        console.log(response);
        setEntrepreneurship(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch entrepreneurship data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, entrepreneurship };
};

const useClientEntrepreneurshipData = (
  id: any,
  token?: string | null,
  triggerRefetch?: boolean
) => {
  const [entrepreneurship, setEntrepreneurship] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `/client/GetEntrepreneurshipById/${id}`,
          token as any
        );

        console.log(response);
        setEntrepreneurship(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch client entrepreneurship data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, entrepreneurship };
};

const useCreateEntrepreneurship = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  const createEntrepreneurship = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/Entrepreneurship/CreateEntrepreneurship",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging
      setData(response?.message);
      toast({
        description: "Entrepreneurship created successfully.",
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

  return { createEntrepreneurship, data, loading, error };
};

const useDeleteEntrepreneurship = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const deleteEntrepreneurship = async (id: string, closeDeleteDialogRef: any) => {
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

      const response = await deleteAPI(`/api/Entrepreneurship/Delete/${id}`, token);
      setSuccess(response.success);
      toast({
        description: "Entrepreneurship deleted successfully.",
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

  return { deleteEntrepreneurship, loading, error, success };
};

const useUpdateEntrepreneurship = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const updateEntrepreneurship = async (id: any, payload: any) => {
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
        `/api/Entrepreneurship/UpdateEntrepreneurship/${id}`,
        payload,
        token as any
      );
      setSuccess(response.success);
      toast({
        description: "Entrepreneurship updated successfully.",
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

  return { updateEntrepreneurship, loading, error, success };
};

export {
  useEntrepreneurshipsData,
  useClientEntrepreneurshipsData,
  useClientEntrepreneurshipData,
  useEntrepreneurshipData,
  useCreateEntrepreneurship,
  useDeleteEntrepreneurship,
  useUpdateEntrepreneurship,
};
