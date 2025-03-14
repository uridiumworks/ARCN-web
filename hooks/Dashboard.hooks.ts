import { getAPI } from "@/lib/Axios";
import { useEffect, useState } from "react";
import { useToast } from "./use-toast"; // Import the useToast hook
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

const useDashboardData = () => {
  const [dashboard, setDashboard] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast
  const { push } = useRouter();

  useEffect(() => {
    async function fetchDashboard() {
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
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI(
          "odata/GetDashboardData",
          token as string
        );

        console.log(response);
        setDashboard(response);
        toast({
          description: "Dashboard data fetched successfully.",
        });
      } catch (error: any) {
        console.log(error);
        setLoading(false);
        setError(error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed to fetch dashboard data.",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchDashboard();
  }, [push, toast]);

  return { loading, error, dashboard };
};

export { useDashboardData };
