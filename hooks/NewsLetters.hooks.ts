import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useNewsLettersData = (token: string | null, triggerRefetch?: boolean) => {
  const [newsLetters, setNewsLetters] = useState<any>(() => {
    if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem("NewsLetterData");
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
        const response: any = await getAPI("odata/GetAllNewsLetter", token as any);

        console.log(response);
        localStorage.setItem("NewsLetterData", JSON.stringify(response)); // Save to localStorage
        setNewsLetters(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, newsLetters };
};
const useClientNewsLettersData = (token?: string | null, triggerRefetch?: boolean) => {
  const [newsLetters, setNewsLetters] = useState<any>(() => {
    if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem("NewsLetterData");
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
        const response: any = await getAPI("/client/GetAllNewsLetter", token as any);

        console.log(response);
        localStorage.setItem("NewsLetterData", JSON.stringify(response)); // Save to localStorage
        setNewsLetters(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, newsLetters };
};

const useNewsLetterData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [newsLetter, setNewsLetter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetNewsLetterById/${id}`,
          token as any
        );

        console.log(response);
        setNewsLetter(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, newsLetter };
};
const useClientNewsLetterData = (
  id: any,
  token?: string | null,
  triggerRefetch?: boolean
) => {
  const [newsLetter, setNewsLetter] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `/client/GetNewsLetterById/${id}`,
          token as any
        );

        console.log(response);
        setNewsLetter(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, newsLetter };
};

const useCreateNewsLetter = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);

  const createNewsLetter = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/NewsLetter/CreateNewsLetter",
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

  return { createNewsLetter, data, loading, error };
};

const useDeleteNewsLetter = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteNewsLetter = async (id: string, closeDeleteDialogRef: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await deleteAPI(`/api/NewsLetter/Delete/${id}`, token);
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

  return { deleteNewsLetter, loading, error, success };
};

const useUpdateNewsLetter = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const updateNewsLetter = async (id: any, payload: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await putAPI(
        `/api/NewsLetter/UpdateNewsLetter/${id}`,
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

  return { updateNewsLetter, loading, error, success };
};

export {
  useNewsLettersData,
  useClientNewsLettersData,
  useClientNewsLetterData,
  useNewsLetterData,
  useCreateNewsLetter,
  useDeleteNewsLetter,
  useUpdateNewsLetter,
};
