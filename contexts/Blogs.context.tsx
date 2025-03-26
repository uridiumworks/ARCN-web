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

interface BlogsContextInterface {
  blogs: any[];
  isLoading: boolean;
  isUpdating: boolean;
  getBlogs: () => Promise<void>;
  deleteBlog: (id: string, closeDeleteDialogRef: any) => Promise<void>;
}

const BlogsContext = createContext<BlogsContextInterface | null>(null);

export const useBlogContext = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogsContext must be used within a BlogsProvider");
  }
  return context;
};

export const BlogsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const getBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }
      setError(null);
      const response: any = await getAPI("odata/GetAllBlog", token as any);

      console.log(response);
      // localStorage.setItem("blogData", JSON.stringify(response)); // Save to localStorage
      setBlogs(response);
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

  const deleteBlog = async (id: string, closeDeleteDialogRef: any) => {
    setIsUpdating(true);
    setError(null);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      await deleteAPI(`/api/Blog/Delete/${id}`, token);
      await getBlogs();
      toast({
        // variant: "default",
        description: "Blog deleted.",
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

  const value: BlogsContextInterface = {
    getBlogs,
    deleteBlog,
    isUpdating,
    isLoading,
    blogs,
  };

  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
};

export const useBlog = useBlogContext;
