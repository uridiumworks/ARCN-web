import { useCallback, useState } from "react";
import { useToast } from "./use-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { getAPI } from "@/lib/Axios";

type States = {
  stateId: number;
  stateName: string;
};

type LGA = {
  localGovernmentAreaId: number;
  localGovernmentName: string;
};

export function useGetStates() {
  const [states, setStates] = useState<States[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchStates = useCallback(async () => {
    setIsLoading(true);

    try {
      const response: any = await getAPI("odata/GetState");
      setStates(response);
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
  }, [toast]);

  return { fetchStates, states, isLoading };
}

export function useGetLGAByStateId() {
  const [lga, setLga] = useState<LGA[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchLga = useCallback(
    async (stateId: number) => {
      setIsLoading(true);

      try {
        const response: any = await getAPI(
          `odata/GetLocalGovernmentByStateId/${stateId}`
        );

        const formattedResponse = response?.map(
          (res: { localGovernmentAreaId: any; localGovernmentName: any }) => ({
            localGovernmentAreaId: res.localGovernmentAreaId,
            localGovernmentName: res.localGovernmentName,
          })
        );
        setLga(formattedResponse);
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
    },
    [toast]
  );

  return { fetchLga, lga, isLoading };
}
