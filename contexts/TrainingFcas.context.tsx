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

interface TrainingFcaContextInterface {
  trainingFca: any[];
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  getTrainingFca: () => Promise<void>;
  deleteTrainingFca: (id: string, closeDeleteDialogRef: any) => Promise<void>;
  updateTrainingFca: (id: string, payload: any) => Promise<void>;
  createTrainingFca: (payload: any) => Promise<void>;
}

const TrainingFcaContext = createContext<TrainingFcaContextInterface | null>(
  null
);

export const useTrainingFcaContext = () => {
  const context = useContext(TrainingFcaContext);
  if (!context) {
    throw new Error(
      "useTrainingFcaContext must be used within a TrainingFcaProvider"
    );
  }
  return context;
};

export const TrainingFcaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [trainingFca, setTrainingFca] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const getTrainingFca = useCallback(async () => {
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
      const response: any = await getAPI("odata/GetAllFCA", token);
      setTrainingFca(response);
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

  const createTrainingFca = async (payload: any) => {
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
      const response = await postAPI("/api/FCA/CreateFCA", payload, token);

      toast({
        description: response?.message || "FCA created successfully.",
      });
      await getTrainingFca()
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

  const updateTrainingFca = async (id: string, payload: any) => {
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
            `/api/FCA/UpdateFCA/${id}`,
          payload,
          token
        );
  
        toast({
          description: response?.message || "FCA updated successfully."
        });
        push("/admin/training?tab=fca");
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

     const deleteTrainingFca = async (id: string, closeDeleteDialogRef: any) => {
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
  const response = await deleteAPI(`/api/FCA/Delete/${id}`, token);
    
          toast({
            description: response?.message || "FCA deleted successfully.",
          });
          closeDeleteDialogRef?.current.click();
          await getTrainingFca();
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
    <TrainingFcaContext.Provider value={{
        createTrainingFca,
        deleteTrainingFca,
        updateTrainingFca,
        getTrainingFca,
        isCreating,
        isDeleting,
        isUpdating,
        isLoading,
        trainingFca
    }}>
      {children}
    </TrainingFcaContext.Provider>
  );
};
