import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState, useCallback } from "react";
import { useToast } from "./use-toast";
import { useRouter } from "next/navigation";

const useBlogsData = (token: string | null) => {
  const [blogs, setBlogs] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("blogData");
      return savedData ? JSON.parse(savedData) : [];
    }
    return []; // Return a default value for SSR
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await getAPI("odata/GetAllBlog", token as any);

      console.log(response);
      localStorage.setItem("blogData", JSON.stringify(response)); // Save to localStorage
      setBlogs(response);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An unknown error occurred",
      });
    }
  }, [token]);

  return { loading, error, blogs, fetchDashboard };
};

const useBlogsDataV2 = () => {
  const [blogs, setBlogs] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("blogData");
      return savedData ? JSON.parse(savedData) : [];
    }
    return []; // Return a default value for SSR
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const fetchBlogsDashboard = useCallback(async () => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      toast({
        description: "No token found",
        variant: "destructive",
      });
      localStorage.clear();
      push("/signin");
      return;
    }
    setLoading(true);
    try {
      const response: any = await getAPI("odata/GetAllBlog", token as any);
      localStorage.setItem("blogData", JSON.stringify(response)); // Save to localStorage
      setBlogs(response);
    } catch (err: any) {
      if (err instanceof AxiosError) {
        toast({
          title: "Error",
          description:
            err.response?.data.message ||
            "An error occurred while processing request",
          variant: "destructive",
        });
      } else {
        toast({
          description: "An unknown error occurred",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  }, [push, toast]);

  return { loading, blogs, fetchBlogsDashboard };
};

const useBlogData = (
  token: string | null,
  id: any,
  triggerRefetch?: boolean
) => {
  const [blog, setBlog] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          `odata/GetBlogById/${id}`,
          token as any
        );

        console.log(response);
        setBlog(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        });
      }
    }
    fetchDashboard();
  }, [token, triggerRefetch, id]);

  return { loading, error, blog };
};

const useCreateBlog = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);
  // const {push} = useRouter();
  const { toast } = useToast();

  const createBlog = async (payload: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await postAPI(
        "/api/Blog/CreateBlog",
        payload,
        token as any
      );
      console.log("API response:", response); // Debugging
      setData(response?.message);
      toast({
        // variant: "default",
        description: "Blog created.",
      });
      // push(url)
      setLoading(false);
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

  return { createBlog, data, loading, error };
};

const useDeleteBlog = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast();

  const deleteBlog = async (id: string, closeDeleteDialogRef: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await deleteAPI(`/api/Blog/Delete/${id}`, token);
      setSuccess(response.success);
      toast({
        // variant: "default",
        description: "Blog deleted.",
      });
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

  return { deleteBlog, loading, error, success };
};

const useUpdateBlog = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const updateBlog = async (id: any, payload: any, url: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await putAPI(
        `/api/Blog/UpdateBlog/${id}`,
        payload,
        token as any
      );
      setSuccess(response.success);
      setLoading(false);
      toast({
        // variant: "default",
        description: "Blog updated.",
      });
      push(url);
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

  return { updateBlog, loading, error, success };
};

export {
  useBlogsData,
  useBlogsDataV2,
  useBlogData,
  useCreateBlog,
  useDeleteBlog,
  useUpdateBlog,
};
