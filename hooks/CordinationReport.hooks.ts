import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useCordinationReportsData = (token: string | null, triggerRefetch?: boolean) => {
    const [cordinationReport, setCordinationReport] = useState<any>(() => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem("cordinationReportData");
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
                const response: any = await getAPI("odata/GetAllCordinationReport", token as any);

                console.log(response);
                localStorage.setItem("cordinationReportData", JSON.stringify(response)); // Save to localStorage
                setCordinationReport(response);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                setError(error);
            }
        }
        fetchDashboard();
    }, [token, triggerRefetch]);

    return { loading, error, cordinationReport };
};
const useClientCordinationReportsData = (token?: string | null, triggerRefetch?: boolean) => {
    const [CordinationReport, setCordinationReport] = useState<any>(() => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem("cordinationReportData");
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
                const response: any = await getAPI("/client/GetAllCordinationReport", token as any);
                console.log(response);
                localStorage.setItem("cordinationReportData", JSON.stringify(response)); // Save to localStorage
                setCordinationReport(response);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                setError(error);
            }
        }
        fetchDashboard();
    }, [token, triggerRefetch]);

    return { loading, error, CordinationReport };
};

const useCordinationReportData = (
    token: string | null,
    id: any,
    triggerRefetch?: boolean
) => {
    const [report, setReport] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDashboard() {
            try {
                setLoading(true);
                setError(null);
                const response: any = await getAPI(
                    `odata/GetCordinationReportById/${id}`,
                    token as any
                );

                console.log(response);
                setReport(response);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                setError(error);
            }
        }
        fetchDashboard();
    }, [token, triggerRefetch]);

    return { loading, error, report };
};

const useClientCordinationReport = (
    id: any,
    token?: string | null,
    triggerRefetch?: boolean
) => {
    const [report, setReport] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDashboard() {
            try {
                setLoading(true);
                setError(null);
                const response: any = await getAPI(
                    `/client/GetCordinationReportById/${id}`,
                    token as any
                );

                console.log(response);
                setReport(response);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                setError(error);
            }
        }
        fetchDashboard();
    }, [token, triggerRefetch]);

    return { loading, error, report };
};

const useCreateCordinationReport = (token: string | null) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<string | null>(null);

    const createReport = async (payload: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await postAPI(
                "/api/CordinationReport/CreateCordinationReport",
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

    return { createReport, data, loading, error };
};

const useDeleteCordinationReport = (token: string | null) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const deleteReport = async (id: string, closeDeleteDialogRef: any) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const token = localStorage.getItem("userToken");
            if (!token) {
                setError("No token found");
                return;
            }

            const response = await deleteAPI(`/api/CordinationReport/Delete/${id}`, token);
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

    return { deleteReport, loading, error, success };
};

const useUpdateCordinationReport = (token: string | null) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const updateReport = async (id: any, payload: any) => {
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
                `/api/CordinationReport/UpdateCordinationReport/${id}`,
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

    return { updateReport, loading, error, success };
};

export {
    useCordinationReportsData,
    useCordinationReportData,
    useClientCordinationReportsData,
    useClientCordinationReport,
    useCreateCordinationReport,
    useDeleteCordinationReport,
    useUpdateCordinationReport,
};
