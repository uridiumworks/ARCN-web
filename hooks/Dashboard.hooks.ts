import { getAPI } from "@/lib/Axios";
import { useEffect, useState } from "react";

const useDashboardData = (token: string | null) => {
    const [dashboard, setDashboard] = useState<any>(() => {
        const savedData = localStorage.getItem("dashboardData");
        return savedData ? JSON.parse(savedData) : [];
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDashboard() {
            try {
                setLoading(true);
                setError(null);

                const response: any = await getAPI("odata/GetDashboardData", token as any);

                
                setDashboard(response);
                localStorage.setItem("dashboardData", JSON.stringify(response)); // Save to localStorage
                
            } catch (error: any) {
                setLoading(false);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        // Only fetch data if it's not in localStorage
        if (!localStorage.getItem("dashboardData")) {
            fetchDashboard();
        }
    }, [token]);

    return { loading, error, dashboard };
};

export { useDashboardData };
