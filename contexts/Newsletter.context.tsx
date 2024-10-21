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

interface NewlettersContextInterface {
  newsLetters: any[];
  isLoading: boolean;
  isUpdating: boolean;
  getNewsletters: () => Promise<void>;
  deleteNewsletter: (id: string, closeDeleteDialogRef: any) => Promise<void>;
}

const NewslettersContext = createContext<NewlettersContextInterface | null>(null);

export const useNewsletterContext = () => {
  const context = useContext(NewslettersContext);
  if (!context) {
    throw new Error("useNewsletterContext must be used within a NewslettersProvider");
  }
  return context;
};

export const NewsletterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
    const [newsLetters, setNewsLetters] = useState<any>(() => {
        if (typeof window !== 'undefined') {
          const savedData = localStorage.getItem("NewsLetterData");
          return savedData ? JSON.parse(savedData) : [];
        }
        return []; // Return a default value for SSR
      });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const getNewsletters = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }
      setError(null);
      const response: any = await getAPI("odata/GetAllNewsLetter", token as any);
      console.log(response);
      localStorage.setItem("NewsLetterData", JSON.stringify(response)); 
      setNewsLetters(response);
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

  const deleteNewsletter = async (id: string, closeDeleteDialogRef: any) => {
    setIsUpdating(true);
    setError(null);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

       await deleteAPI(`/api/NewsLetter/Delete/${id}`, token);
      await getNewsletters();
      toast({
        description: "Newsletter deleted successfully.",
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

  const value: NewlettersContextInterface = {
    getNewsletters,
    deleteNewsletter,
    isUpdating,
    isLoading,
    newsLetters,
  };

  return (
    <NewslettersContext.Provider value={value}>
      {children}
    </NewslettersContext.Provider>
  );
};
export const useNewsletter = useNewsletterContext;
