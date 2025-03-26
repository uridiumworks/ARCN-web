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

interface TrainingEntrepenshipContextInterface {
  trainingEntrepenship: any[];
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  getTrainingEntrepenship: () => Promise<void>;
  deleteTrainingEntrepenship: (
    id: string,
    closeDeleteDialogRef: any
  ) => Promise<void>;
  updateTrainingEntrepenship: (id: string, payload: any) => Promise<void>;
  createTrainingEntrepenship: (payload: any) => Promise<void>;
}

const TrainingEntrepenshipContext =
  createContext<TrainingEntrepenshipContextInterface | null>(null);

export const useTrainingEntrepenshipContext = () => {
  const context = useContext(TrainingEntrepenshipContext);
  if (!context) {
    throw new Error(
      "useTrainingEntrepenshipContext must be used within a TrainingEntrepenshipProvider"
    );
  }
  return context;
};

export const TrainingEntrepenshipProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [trainingEntrepenship, setTrainingEntrepenship] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const getTrainingEntrepenship = useCallback(async () => {
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
      const response: any = await getAPI("odata/GetAllEntrepreneurship", token);
      setTrainingEntrepenship(response);
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

  const createTrainingEntrepenship = async (payload: any) => {
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
        "/api/Entrepreneurship/CreateEntrepreneurship",
        payload,
        token
      );

      toast({
        description:
          response?.message || "Entrepreneurship created successfully.",
      });
      await getTrainingEntrepenship();
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

  const updateTrainingEntrepenship = async (id: string, payload: any) => {
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
        `/api/Entrepreneurship/UpdateEntrepreneurship/${id}`,
        payload,
        token
      );

      toast({
        description:
          response?.message || "Entrepreneurship updated successfully.",
      });
      push("/admin/training?tab=entrepreneurship");
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

  const deleteTrainingEntrepenship = async (
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
        `/api/Entrepreneurship/Delete/${id}`,
        token
      );

      toast({
        description:
          response?.message || "Entrepreneurship deleted successfully.",
      });
      closeDeleteDialogRef?.current.click();
      await getTrainingEntrepenship();
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
    <TrainingEntrepenshipContext.Provider
      value={{
        createTrainingEntrepenship,
        deleteTrainingEntrepenship,
        updateTrainingEntrepenship,
        getTrainingEntrepenship,
        isCreating,
        isDeleting,
        isUpdating,
        isLoading,
        trainingEntrepenship,
      }}
    >
      {children}
    </TrainingEntrepenshipContext.Provider>
  );
};
