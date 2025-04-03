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
import {
  ContactUsData,
  OurPrograms,
  OurTechnologiesAndProjects,
  Report,
  ApiEndpointsEnum,
  ContactUsRequestBody,
} from "@/types";
import axiosInstance from "@/lib/axiosInstance";

interface GlobalClientContextInterface {
  ourPrograms?: OurPrograms;
  reports?: Report;
  ourTechs?: OurTechnologiesAndProjects;
  ourProjects?: OurTechnologiesAndProjects;
  coordinationReports?: Report;
  isLoadingOurPrograms: boolean;
  isLoadingReports: boolean;
  isLoadingOurTechs: boolean;
  isLoadingOurProjects: boolean;
  isLoadingCoordinationReports: boolean;
  isCreatingContact: boolean;
  fetchOurPrograms: (page: number, pageSize: number) => Promise<void>;
  fetchAllReports: (page: number, pageSize: number) => Promise<void>;
  fetchOurTechs: (page: number, pageSize: number) => Promise<void>;
  fetchOurProjects: (page: number, pageSize: number) => Promise<void>;
  fetchCoordinationReports: (page: number, pageSize: number) => Promise<void>;
  createContactUs: (data: ContactUsData) => Promise<void>;
}

const GlobalClientContext = createContext<GlobalClientContextInterface | null>(
  null
);

export const useGlobalClientContext = () => {
  const context = useContext(GlobalClientContext);
  if (!context) {
    throw new Error(
      "useGlobalClientContext must be used within a GlobalCLientProvider"
    );
  }
  return context;
};

export const GlobalClientProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ourPrograms, setOurPrograms] = useState<OurPrograms>();
  const [isLoadingOurPrograms, setIsLoadingOurPrograms] =
    useState<boolean>(true);
  const [reports, setReports] = useState<Report>();
  const [isLoadingReports, setIsLoadingReports] = useState<boolean>(true);
  const [ourTechs, setOurTechs] = useState<OurTechnologiesAndProjects>();
  const [ourProjects, setOurProjects] = useState<OurTechnologiesAndProjects>();
  const [isLoadingOurTechs, setIsLoadingOurTechs] = useState<boolean>(true);
  const [isLoadingOurProjects, setIsLoadingOurProjects] =
    useState<boolean>(true);
  const [coordinationReports, setCoordinationReports] = useState<Report>();
  const [isLoadingCoordinationReports, setIsLoadingCoordinationReports] =
    useState<boolean>(true);
  const [isCreatingContact, setIsCreatingContact] = useState<boolean>(false);
  const { toast } = useToast();

  const fetchOurPrograms = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = (
          await axiosInstance.get<OurPrograms>(
            `${ApiEndpointsEnum.PROGRAMS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        setOurPrograms(response);
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
        setIsLoadingOurPrograms(false);
      }
    },
    [toast]
  );

  const fetchAllReports = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = (
          await axiosInstance.get<Report>(
            `${ApiEndpointsEnum.ALL_REPORTS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        setReports(response);
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
        setIsLoadingReports(false);
      }
    },
    [toast]
  );

  const fetchOurTechs = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = (
          await axiosInstance.get<Report>(
            `${ApiEndpointsEnum.OUR_PROJECTS_AND_TECHS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        setOurTechs(response);
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
        setIsLoadingOurTechs(false);
      }
    },
    [toast]
  );
  const fetchOurProjects = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = (
          await axiosInstance.get<Report>(
            `${ApiEndpointsEnum.OUR_PROJECTS_AND_TECHS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        setOurProjects(response);
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
        setIsLoadingOurProjects(false);
      }
    },
    [toast]
  );

  const fetchCoordinationReports = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = (
          await axiosInstance.get<Report>(
            `${ApiEndpointsEnum.COORDINARION_REPORTS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        setCoordinationReports(response);
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
        setIsLoadingCoordinationReports(false);
      }
    },
    [toast]
  );

  const createContactUs = useCallback(
    async (body: ContactUsRequestBody) => {
      setIsCreatingContact(true);
      try {
        await axiosInstance.post(ApiEndpointsEnum.CONTACT_US);
        toast({
          title: "🎉 Thank You!",
          description:
            "Thanks for reaching out! We’ll respond as soon as possible.",
        });
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
        setIsCreatingContact(false);
      }
    },
    [toast]
  );

  return (
    <GlobalClientContext.Provider
      value={{
        coordinationReports,
        createContactUs,
        fetchAllReports,
        fetchCoordinationReports,
        fetchOurPrograms,
        fetchOurTechs,
        fetchOurProjects,
        isCreatingContact,
        isLoadingCoordinationReports,
        isLoadingOurPrograms,
        isLoadingOurTechs,
        isLoadingOurProjects,
        isLoadingReports,
        ourPrograms,
        ourTechs,
        ourProjects,
        reports,
      }}
    >
      {children}
    </GlobalClientContext.Provider>
  );
};

export const useGlobalClient = useGlobalClientContext;
