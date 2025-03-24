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

interface ResearchCordinationContextInterface {
  cordination: any[];
  getCordination: () => Promise<void>;
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  createCordination: (payload: any) => Promise<void>;
  deleteCordination: (id: string, closeDeleteDialogRef: any) => Promise<void>;
  updateCordination: (id: string, payload: any) => Promise<void>;
}

const ResearchCordinationContext =
  createContext<ResearchCordinationContextInterface | null>(null);
export const useResearchCordinationContext = () => {
  const context = useContext(ResearchCordinationContext);
  if (!context) {
    throw new Error(
      "useResearchCordinationContext must be used within a ResearchCordinationProvider"
    );
  }
  return context;
};

export const ResearchCordinationProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [cordination, setCordination] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const getCordination = useCallback(async () => {
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
        "odata/GetAllCordinationReport",
        token
      );

      setCordination(response);
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
  }, [push, toast]);

  const createCordination = async (payload: any) => {
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
        "/api/CordinationReport/CreateCordinationReport",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging

      toast({
        description:
          response?.message || "Cordination Report created successfully.",
      });
      await getCordination();
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

  const updateCordination = async (id: string, payload: any) => {
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
        `/api/CordinationReport/UpdateCordinationReport/${id}`,
        payload,
        token
      );

      toast({
        description:
          response?.message || "Cordination Report updated successfully.",
      });
      push("/admin/research?tab=cordination");
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

  const deleteCordination = async (id: string, closeDeleteDialogRef: any) => {
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
        `/api/CordinationReport/Delete/${id}`,
        token
      );
      toast({
        description:
          response?.message || "Cordination Report deleted successfully.",
      });
      closeDeleteDialogRef?.current.click();
      await getCordination();
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
    <ResearchCordinationContext.Provider
      value={{
        isCreating,
        isDeleting,
        isLoading,
        isUpdating,
        updateCordination,
        deleteCordination,
        createCordination,
        getCordination,
        cordination,
      }}
    >
      {children}
    </ResearchCordinationContext.Provider>
  );
};

export const useResearchCordination = useResearchCordinationContext;
