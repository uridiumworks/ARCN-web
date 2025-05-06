import { AxiosError } from "axios";
import {
  useState,
  useCallback,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useToast } from "@/hooks/use-toast";
import {
  OurPrograms,
  OurTechnologiesAndProjects,
  Report,
  Journal,
  NewsLetter,
  ApiEndpointsEnum,
  ContactUsRequestBody,
  MandateSearch,
} from "@/types";
import axiosInstance from "@/lib/axiosInstance";

interface GlobalClientContextInterface {
  mandateSearch?: MandateSearch;
  ourPrograms?: OurPrograms;
  reports?: Report;
  journals?: Journal;
  newsletters?: NewsLetter;
  ourTechs?: OurTechnologiesAndProjects;
  ourProjects?: OurTechnologiesAndProjects;
  coordinationReports?: Report;
  isLoadingOurPrograms: boolean;
  isLoadingReports: boolean;
  isLoadingOurTechs: boolean;
  isLoadingOurProjects: boolean;
  isLoadingCoordinationReports: boolean;
  isLoadingMandateSearch: boolean;
  isCreatingContact: boolean;
  isLoadingJournals: boolean;
  isLoadingNewsLetters: boolean;
  fetchOurPrograms: (page: number, pageSize: number) => Promise<void>;
  fetchAllReports: (
    page: number,
    pageSize: number,
    customEndpoint?: string
  ) => Promise<void>;
  fetchOurTechs: (page: number, pageSize: number) => Promise<void>;
  fetchOurProjects: (page: number, pageSize: number) => Promise<void>;
  fetchCoordinationReports: (page: number, pageSize: number) => Promise<void>;
  fetchMandateSearch: () => Promise<void>;
  fetchAllJournals: (page: number, pageSize: number, customEndpoint?: string) => Promise<void>;
  fetchAllNewsletters: (page: number, pageSize: number, customEndpoint?: string) => Promise<void>;
  createContactUs: (data: ContactUsRequestBody) => Promise<void>;
  setReports: Dispatch<SetStateAction<Report | undefined>>;
  setJournals: Dispatch<SetStateAction<Journal | undefined>>;
  setNewsLetters: Dispatch<SetStateAction<NewsLetter | undefined>>;
  
}

export const GlobalClientContext =
  createContext<GlobalClientContextInterface | null>(null);

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
  const [mandateSearch, setMandateSearch] = useState<MandateSearch>();
  const [isLoadingMandateSearch, setIsLoadingMandateSearch] =
    useState<boolean>(true);
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
  const [isLoadingJournals, setIsLoadingJournals] = useState<boolean>(true);
  const [journals, setJournals] = useState<Journal>();
  const [isLoadingNewsLetters, setIsLoadingNewsLetters] =useState<boolean>(true);
  const [newsletters, setNewsLetters] = useState<NewsLetter>();
    useState<boolean>(false);


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
    async (page: number, pageSize: number, customEndpoint?: string) => {
      try {
        const apiUrl =
          customEndpoint ||
          `${ApiEndpointsEnum.ALL_REPORTS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

        const response = (await axiosInstance.get<Report>(apiUrl)).data;
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

  const fetchAllJournals = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = (
          await axiosInstance.get<Journal>(
            `${ApiEndpointsEnum. ALL_JOURNAL}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        setJournals(response);
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
        setIsLoadingJournals(false);
      }
    },
    [toast]
  );

  const fetchAllNewsletters = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = (
          await axiosInstance.get<NewsLetter>(
            `${ApiEndpointsEnum.ALL_NEWSLETTERS}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        setNewsLetters(response);
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
        setIsLoadingNewsLetters(false);
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

  const fetchMandateSearch = useCallback(async () => {
    try {
      const response = (
        await axiosInstance.get<MandateSearch>(
          `${ApiEndpointsEnum.MANDATE_SEARCH}`
        )
      ).data;
      setMandateSearch(response);
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
      setIsLoadingMandateSearch(false);
    }
  }, [toast]);

  const createContactUs = useCallback(
    async (body: ContactUsRequestBody) => {
      setIsCreatingContact(true);
      try {
        await axiosInstance.post(ApiEndpointsEnum.CONTACT_US, {
          data: body,
        });
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
        fetchAllJournals,
        fetchAllNewsletters,
        isCreatingContact,
        isLoadingCoordinationReports,
        isLoadingOurPrograms,
        isLoadingOurTechs,
        isLoadingOurProjects,
        isLoadingReports,
        isLoadingJournals,
        isLoadingNewsLetters,
        setJournals,
        setNewsLetters,
        ourPrograms,
        ourTechs,
        ourProjects,
        newsletters,
        journals,
        reports,
        setReports,
        mandateSearch,
        isLoadingMandateSearch,
        fetchMandateSearch,
      }}
    >
      {children}
    </GlobalClientContext.Provider>
  );
};

export const useGlobalClient = useGlobalClientContext;
