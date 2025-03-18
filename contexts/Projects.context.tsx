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

interface ProjectsContextInterface {
  projects: any[];
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  getProjects: () => Promise<void>;
  deleteProjects: (
    id: string,
    closeDeleteDialogRef: any
  ) => Promise<void>;
  updateProjects: (id: string, payload: any) => Promise<void>;
  createProjects: (payload: any) => Promise<void>;
}

const ProjectsContext =
  createContext<ProjectsContextInterface | null>(null);

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsProvider"
    );
  }
  return context;
};

export const ProjectsProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [projects, setProjects] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const getProjects = useCallback(async () => {
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
      const response: any = await getAPI("odata/GetAllProject", token);
      setProjects(response);
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

  const createProjects = async (payload: any) => {
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
        "/api/Project/CreateProject",
        payload,
        token
      );

      toast({
        description:
          response?.message || "Project created successfully.",
      });
      await getProjects();
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

  const updateProjects = async (id: string, payload: any) => {
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
        `/api/Project/UpdateProject/${id}`,
        payload,
        token
      );

      toast({
        description:
          response?.message || "Project updated successfully.",
      });
      push("/admin/programs-and-projects?tab=project");
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

  const deleteProjects = async (
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
        `/api/Project/Delete/${id}`,
        token
      );

      toast({
        description:
          response?.message || "Project deleted successfully.",
      });
      closeDeleteDialogRef?.current.click();
      await getProjects();
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
    <ProjectsContext.Provider
      value={{
        createProjects,
        deleteProjects,
        updateProjects,
        getProjects,
        isCreating,
        isDeleting,
        isUpdating,
        isLoading,
        projects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
