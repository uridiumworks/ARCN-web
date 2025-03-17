import { useToast } from "@/hooks/use-toast";
import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface TrainingSupervsionReportContextInterface {
  trainingSupervsionReport: any[];
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  getTrainingSupervsionReport: () => Promise<void>;
  deleteTrainingSupervsionReport: (
    id: string,
    closeDeleteDialogRef: any
  ) => Promise<void>;
  updateTrainingSupervsionReport: (id: string, payload: any) => Promise<void>;
  createTrainingSupervsionReport: (payload: any) => Promise<void>;
}

const TrainingSupervsionReportContext =
  createContext<TrainingSupervsionReportContextInterface | null>(null);

export const useTrainingSupervsionReportContext = () => {
  const context = useContext(TrainingSupervsionReportContext);
  if (!context) {
    throw new Error(
      "useTrainingSupervsionReportContext must be used within a TrainingSupervsionReportProvider"
    );
  }
  return context;
};

export const TrainingSupervsionReportProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [trainingSupervsionReport, setTrainingSupervsionReport] = useState<any>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const getTrainingSupervsionReport = useCallback(async () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      toast({
        description: "No token found",
        variant: "destructive",
      });
      localStorage.clear();
      push("/login");
      return;
    }

    setIsLoading(true);

    try {
      const response: any = await getAPI(
        "odata/GetAllSupervisionReport",
        token
      );
      setTrainingSupervsionReport(response);
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, [toast, push]);

  const createTrainingSupervsionReport = async (payload: any) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      toast({
        description: "No token found",
        variant: "destructive",
      });
      localStorage.clear();
      push("/login");
      return;
    }

    setIsCreating(true);

    try {
      const response = await postAPI(
        "/api/SupervisionReport/CreateSupervisionReport",
        payload,
        token
      );

      toast({
        description:
          response?.message || "Supervision report created successfully.",
      });
      await getTrainingSupervsionReport();
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    } finally {
      setIsCreating(false);
    }
  };

  const updateTrainingSupervsionReport = async (id: string, payload: any) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      toast({
        description: "No token found",
        variant: "destructive",
      });
      localStorage.clear();
      push("/login");
      return;
    }

    setIsUpdating(true);

    try {
      const response = await putAPI(
        `/api/SupervisionReport/UpdateSupervisionReport/${id}`,
        payload,
        token
      );

      toast({
        description:
          response?.message || "Supervision report updated successfully.",
      });
      push("/admin/training");
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
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

  const deleteTrainingSupervsionReport = async (
    id: string,
    closeDeleteDialogRef: any
  ) => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      toast({
        description: "No token found",
        variant: "destructive",
      });
      localStorage.clear();
      push("/login");
      return;
    }

    setIsDeleting(true);

    try {
      const response = await deleteAPI(
        `/api/SupervisionReport/Delete/${id}`,
        token
      );

      toast({
        description:
          response?.message || "Supervision report deleted successfully.",
      });
      closeDeleteDialogRef?.current.click();
      await getTrainingSupervsionReport();
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <TrainingSupervsionReportContext.Provider
      value={{
        createTrainingSupervsionReport,
        deleteTrainingSupervsionReport,
        updateTrainingSupervsionReport,
        getTrainingSupervsionReport,
        isCreating,
        isDeleting,
        isUpdating,
        isLoading,
        trainingSupervsionReport,
      }}
    >
      {children}
    </TrainingSupervsionReportContext.Provider>
  );
};
