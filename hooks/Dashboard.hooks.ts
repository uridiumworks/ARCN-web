import { getAPI } from "@/lib/Axios";
import { useEffect, useState } from "react";
import { useToast } from "./use-toast"; // Import the useToast hook

const useDashboardData = (token: string | null) => {
  const [dashboard, setDashboard] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Initialize toast

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setError(null);
        const response: any = await getAPI("odata/GetDashboardData", token as any);

        console.log(response);
        setDashboard(response);
        toast({
          description: "Dashboard data fetched successfully.",
        });
      } catch (error: any) {
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
  }, [token]);

  return { loading, error, dashboard };
};

export { useDashboardData };
