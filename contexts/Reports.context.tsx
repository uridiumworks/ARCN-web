import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { useToast } from "@/hooks/use-toast";

interface ReportsContextInterface {
  reports: any[];
  isLoading: boolean;
  isUpdating: boolean;
  getReports: () => Promise<void>;
  deleteReport: (id: string, closeDeleteDialogRef: any) => Promise<void>;
}

const ReportsContext = createContext<ReportsContextInterface | null>(null);

export const useReportsContext = () => {
  const context = useContext(ReportsContext);
  if (!context) {
    throw new Error("useReportsContext must be used within a ReportsProvider");
  }
  return context;
};

export const ReportsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [reports, setReports] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("reportData");
      return savedData ? JSON.parse(savedData) : [];
    }
    return []; // Return a default value for SSR
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const getReports = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }
      setError(null);
      const response: any = await getAPI("odata/GetAllReports", token as any);
      console.log(response);
      localStorage.setItem("reportData", JSON.stringify(response)); // Save to localStorage
      setReports(response);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unknown error occurred",
      });
    }
  }, [toast]);

  const deleteReport = async (id: string, closeDeleteDialogRef: any) => {
    setIsUpdating(true);
    setError(null);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      await deleteAPI(`/api/Reports/Delete/${id}`, token);
      await getReports();
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
      setIsUpdating(false);
    }
  };

  const value: ReportsContextInterface = {
    getReports,
    deleteReport,
    isUpdating,
    isLoading,
    reports,
  };

  return (
    <ReportsContext.Provider value={value}>{children}</ReportsContext.Provider>
  );
};
export const useReport = useReportsContext;
