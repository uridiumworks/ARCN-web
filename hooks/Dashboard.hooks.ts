import { getAPI } from "@/lib/Axios"
import { useEffect, useState } from "react"


const useDashboardData = (token: string | null) => {
    const [dashboard, setDashboard] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchDashboard(){
            try {
                setLoading(true)
                setError(null)
                const response: any = await getAPI("odata/GetDashboardData", token as any)
                console.log(response)
                setDashboard(response)
            } catch (error: any) {
                setLoading(false)
                setError(error)
            }
        }
        fetchDashboard()
    },[token])
    return {loading, error, dashboard}
    
}

export {useDashboardData}