import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState,useCallback } from "react";
import { useToast } from "./use-toast"; // Import the useToast hook
import {useRouter} from 'next/navigation'

const useReportsData = (token: string | null) => {
  const [reports, setReports] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("reportData");
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
        const response: any = await getAPI("odata/GetAllReports", token as any);

        console.log(response);
        localStorage.setItem("reportData", JSON.stringify(response)); // Save to localStorage
        setReports(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch reports data.",
        });
      }
    },[])
   


  return { loading, error, reports,fetchDashboard };
};

const useClientReportsData = (token?: string | null, triggerRefetch?: boolean) => {
  const [reports, setReports] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("reportData");
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
        const response: any = await getAPI("/client/GetAllReports", token as any);
        console.log(response);
        localStorage.setItem("reportData", JSON.stringify(response)); // Save to localStorage
        setReports(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch client reports data.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, reports };
};

const useReportData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [report, setReport] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetReportsById/${id}`,
          token as any
        );

        console.log(response);
        setReport(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch report data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, report };
};

const useClientReportData = (
  id: any,
  token?: string | null,
  triggerRefetch?: boolean
) => {
  const [report, setReport] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `/client/GetReportsById/${id}`,
          token as any
        );

        console.log(response);
        setReport(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch client report data by ID.",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, report };
};

const useCreateReport = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  const createReport = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/Reports/CreateReports",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging
      setData(response?.message);
      toast({
        description: "Report created successfully.",
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

  return { createReport, data, loading, error };
};

const useDeleteReport = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast

  const deleteReport = async (id: string, closeDeleteDialogRef: any) => {
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

      const response = await deleteAPI(`/api/Reports/Delete/${id}`, token);
      setSuccess(response.success);
      toast({
        description: "Report deleted successfully.",
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

  return { deleteReport, loading, error, success };
};

const useUpdateReport = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast(); // Initialize toast
  const {push} = useRouter();

  const updateReport = async (id: any, payload: any,url:string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!token) {
        setError("No token found");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "No token found.",
        });
        return;
      }

      const response = await putAPI(
        `/api/Reports/UpdateReports/${id}`,
        payload,
        token as any
      );
      setSuccess(response.success);
      toast({
        description: "Report updated successfully.",
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

  return { updateReport, loading, error, success };
};

export {
  useReportsData,
  useReportData,
  useClientReportsData,
  useClientReportData,
  useCreateReport,
  useDeleteReport,
  useUpdateReport,
};
