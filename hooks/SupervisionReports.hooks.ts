import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useSupervisionReportsData = (token: string | null, triggerRefetch?: boolean) => {
  const [supervisionReports, setSupervisionReports] = useState<any>(() => {
    if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem("SupervisionReportData");
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
        const response: any = await getAPI("odata/GetAllSupervisionReport", token as any);

        console.log(response);
        localStorage.setItem("SupervisionReportData", JSON.stringify(response)); // Save to localStorage
        setSupervisionReports(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, supervisionReports };
};

const useSupervisionReportData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [supervisionReport, setSupervisionReport] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetSupervisionReportById/${id}`,
          token as any
        );

        console.log(response);
        setSupervisionReport(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, supervisionReport };
};

const useCreateSupervisionReport = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);

  const createSupervisionReport = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/SupervisionReport/CreateSupervisionReport",
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

  return { createSupervisionReport, data, loading, error };
};

const useDeleteSupervisionReport = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteSupervisionReport = async (id: string, closeDeleteDialogRef: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await deleteAPI(`/api/SupervisionReport/Delete/${id}`, token);
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

  return { deleteSupervisionReport, loading, error, success };
};

const useUpdateSupervisionReport = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const updateSupervisionReport = async (id: any, payload: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await putAPI(
        `/api/SupervisionReport/UpdateSupervisionReport/${id}`,
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

  return { updateSupervisionReport, loading, error, success };
};

export {
  useSupervisionReportsData,
  useSupervisionReportData,
  useCreateSupervisionReport,
  useDeleteSupervisionReport,
  useUpdateSupervisionReport,
};
