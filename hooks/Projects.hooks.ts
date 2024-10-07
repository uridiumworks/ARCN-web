import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useProjectsData = (token: string | null, triggerRefetch?: boolean) => {
  const [projects, setProjects] = useState<any>(() => {
    if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem("projectData");
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
        const response: any = await getAPI("odata/GetAllProject", token as any);

        console.log(response);
        localStorage.setItem("projectData", JSON.stringify(response)); // Save to localStorage
        setProjects(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, projects };
};
const useClientProjectsData = (token?: string | null, triggerRefetch?: boolean) => {
  const [projects, setProjects] = useState<any>(() => {
    if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem("projectData");
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
        const response: any = await getAPI("/client/GetAllProject", token as any);

        console.log(response);
        localStorage.setItem("projectData", JSON.stringify(response)); // Save to localStorage
        setProjects(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, projects };
};

const useProjectData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [project, setProject] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetProjectById/${id}`,
          token as any
        );

        console.log(response);
        setProject(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, project };
};
const useClientProjectData = (
  id: any,
  token?: string | null,
  triggerRefetch?: boolean
) => {
  const [project, setProject] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `/client/GetProjectById/${id}`,
          token as any
        );

        console.log(response);
        setProject(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch]);

  return { loading, error, project };
};

const useCreateProject = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);

  const createProject = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/Project/CreateProject",
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

  return { createProject, data, loading, error };
};

const useDeleteProject = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteProject = async (id: string, closeDeleteDialogRef: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await deleteAPI(`/api/Project/Delete/${id}`, token);
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

  return { deleteProject, loading, error, success };
};

const useUpdateProject = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const updateProject = async (id: any, payload: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await putAPI(
        `/api/Project/UpdateProject/${id}`,
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

  return { updateProject, loading, error, success };
};

export {
  useProjectsData,
  useClientProjectsData,
  useClientProjectData,
  useProjectData,
  useCreateProject,
  useDeleteProject,
  useUpdateProject,
};
