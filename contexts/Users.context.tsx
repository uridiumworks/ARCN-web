import { useToast } from "@/hooks/use-toast";
import { deleteAPI, getAPI, postAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

interface UsersContextInterface {
  users: any[];
  isLoading: boolean;
  isDeleting: boolean;
  isCreating: boolean;
  getUsers: () => Promise<void>;
  deleteUsers: (id: string) => Promise<void>;
  createUsers: (body: CreateUserPayload) => Promise<void>;
}

const UsersContext = createContext<UsersContextInterface | null>(null);
export const useUserContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a UsersProvider");
  }
  return context;
};

export const UsersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { toast } = useToast();
  const { push } = useRouter();

  const getUsers = useCallback(async () => {
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
      const response = await getAPI("/odata/GetAllUsers", token);
      console.log("🚀 ~ fetchUsers ~ response:", response);
      const formattedUsers = response.data.map((el: { firstName: any; lastName: any; email: any; phoneNumber: any; isAdmin: any; }) => {
        return {
          userName: `${el?.firstName} ${el?.lastName}`,
          email: el?.email,
          phoneNumber: el?.phoneNumber,
          role: el?.isAdmin ? "Admin" : "",
        };
      });
      setUsers(formattedUsers);
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

  const createUsers = async (body: CreateUserPayload) => {
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
      const response = await postAPI("/api/User/CreateUser", body, token);
      console.log("Create User response:", response); // Debugging
      toast({
        description: response?.message || "User Created Successfully",
      });
      await getUsers();
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

  const deleteUsers = async (id: string) => {
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
      await deleteAPI(`/api/User/DeleteUser/${id}`, token);
      await getUsers();
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
    <UsersContext.Provider
      value={{
        createUsers,
        isLoading,
        isCreating,
        isDeleting,
        deleteUsers,
        getUsers,
        users,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export const useUsers = useUserContext;
