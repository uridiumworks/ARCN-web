import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useEventsData = (token: string | null, triggerRefetch?: boolean) => {
  const [events, setEvents] = useState<any>(() => {
    if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem("EventData");
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
        const response: any = await getAPI("odata/GetAllEvent", token as any);

        console.log(response);
        localStorage.setItem("EventData", JSON.stringify(response)); // Save to localStorage
        setEvents(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, events };
};

const useEventData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [event, setEvent] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetEventById/${id}`,
          token as any
        );

        console.log(response);
        setEvent(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, event };
};

const useCreateEvent = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);

  const createEvent = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/Event/CreateEvent",
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

  return { createEvent, data, loading, error };
};

const useDeleteEvent = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteEvent = async (id: string, closeDeleteDialogRef: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await deleteAPI(`/api/Event/Delete/${id}`, token);
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

  return { deleteEvent, loading, error, success };
};

const useUpdateEvent = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const updateEvent = async (id: any, payload: any) => {
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
        `/api/Event/UpdateEvent/${id}`,
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

  return { updateEvent, loading, error, success };
};

export {
  useEventsData,
  useEventData,
  useCreateEvent,
  useDeleteEvent,
  useUpdateEvent,
};
