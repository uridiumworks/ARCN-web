import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

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

      setLoading(false);
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        setError(
          errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred"
        );
      } else {
        setError("An unknown error occurred");
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

  const deleteEntrepreneurship = async (id: string, closeDeleteDialogRef: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await deleteAPI(`/api/Entrepreneurship/Delete/${id}`, token);
      setSuccess(response.success);
      setLoading(false);
      closeDeleteDialogRef?.current.click();
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        setError(
          errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred"
        );
      } else {
        setError("An unknown error occurred");
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

  const updateEntrepreneurship = async (id: any, payload: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!token) {
        setError("No token found");
        console.log("No token found")
        return;
      }

      const response = await putAPI(
        `/api/Entrepreneurship/UpdateEntrepreneurship/${id}`,
        payload,
        token as any
      );
      setSuccess(response.success);
      setLoading(false);
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        setError(
          errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred"
        );
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { updateEntrepreneurship, loading, error, success };
};

export {
  useEntrepreneurshipsData,
  useEntrepreneurshipData,
  useCreateEntrepreneurship,
  useDeleteEntrepreneurship,
  useUpdateEntrepreneurship,
};
