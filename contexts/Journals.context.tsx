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

interface JournalsContextInterface {
  journals: any[];
  isLoading: boolean;
  isUpdating: boolean;
  getJournals: () => Promise<void>;
  deleteJournal: (id: string, closeDeleteDialogRef: any) => Promise<void>;
}

const JournalsContext = createContext<JournalsContextInterface | null>(null);

export const useJournalContext = () => {
  const context = useContext(JournalsContext);
  if (!context) {
    throw new Error("useJournalContext must be used within a JournalsProvider");
  }
  return context;
};

export const JournalsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [journals, setJournals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const getJournals = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }
      setError(null);
      const response: any = await getAPI("odata/GetJournals", token as any);
      console.log(response);
      // localStorage.setItem("JournalData", JSON.stringify(response)); // Save to localStorage
      setJournals(response);
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

  const deleteJournal = async (id: string, closeDeleteDialogRef: any) => {
    setIsUpdating(true);
    setError(null);
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        setError("No token found");
        return;
      }

      await deleteAPI(`/api/Journals/Delete/${id}`, token);
      await getJournals();
      toast({
        description: "Journal deleted successfully.",
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

  const value: JournalsContextInterface = {
    getJournals,
    deleteJournal,
    isUpdating,
    isLoading,
    journals,
  };

  return (
    <JournalsContext.Provider value={value}>
      {children}
    </JournalsContext.Provider>
  );
};

export const useJournal = useJournalContext;
