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

interface ResearchNarisContextInterface {
  naris: any[];
  getNaris: () => Promise<void>;
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  createNaris: (payload: any) => Promise<void>;
  deleteNaris: (id: string, closeDeleteDialogRef: any) => Promise<void>;
  updateNaris: (id: string, payload: any) => Promise<void>;
}

const ResearchNarisContext =
  createContext<ResearchNarisContextInterface | null>(null);
export const useResearchNarisContext = () => {
  const context = useContext(ResearchNarisContext);
  if (!context) {
    throw new Error(
      "useResearchNarisContext must be used within a ResearchNarisProvider"
    );
  }
  return context;
};

export const ResearchNarisProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [naris, setNaris] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const getNaris = useCallback(async () => {
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
      const response: any = await getAPI("odata/GetAllNaris", token);
      setNaris(response);
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

  const createNaris = async (payload: any) => {
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
        "/api/Naris/CreateNaris",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging

      toast({
        description: response?.message || "Naris created successfully.",
      });

      await getNaris()
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

  const updateNaris = async (id: string, payload: any) => {
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
        `/api/Naris/UpdateNaris/${id}`,
        payload,
        token
      );

      toast({
        description: response?.message || "Naris updated successfully.",
      });
      push("/admin/research?tab=naris");
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

  const deleteNaris = async (id: string, closeDeleteDialogRef: any) => {
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
      const response = await deleteAPI(`/api/Naris/Delete/${id}`, token);

      toast({
        description: response?.message || "Naris deleted successfully.",
      });
      closeDeleteDialogRef?.current.click();
      await getNaris();
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
    <ResearchNarisContext.Provider
      value={{
        isCreating,
        isDeleting,
        isLoading,
        isUpdating,
        updateNaris,
        deleteNaris,
        createNaris,
        getNaris,
        naris,
      }}
    >
      {children}
    </ResearchNarisContext.Provider>
  );
};

export const useResearchNaris = useResearchNarisContext;
