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
  ApiEndpointsEnum,
  ContactUsRequestBody,
  MandateSearch,
  BaseResponse,
  TechCategory,
  TechSubCategory,
  TechnologyData,
} from "@/types";
import axiosInstance from "@/lib/axiosInstance";

interface GlobalClientContextInterface {
  mandateSearch?: MandateSearch;
  ourPrograms?: OurPrograms;
  reports?: Report;
  ourTechs?: TechnologyData[];
  ourProjects?: OurTechnologiesAndProjects;
  techCategory?: TechCategory[];
  techCategoryItem?: TechCategory;
  techSubCategory?: TechSubCategory[];
  coordinationReports?: Report;
  isLoadingOurPrograms: boolean;
  isLoadingReports: boolean;
  isLoadingOurTechs: boolean;
  isLoadingOurProjects: boolean;
  isLoadingCoordinationReports: boolean;
  isLoadingMandateSearch: boolean;
  isCreatingContact: boolean;
  fetchOurPrograms: (page: number, pageSize: number) => Promise<void>;
  fetchAllReports: (
    page: number,
    pageSize: number,
    customEndpoint?: string
  ) => Promise<void>;
  fetchOurTechs: (categoryId: string, page: number, pageSize: number) => Promise<void>;
  fetchOurProjects: (page: number, pageSize: number) => Promise<void>;
  fetchCoordinationReports: (page: number, pageSize: number) => Promise<void>;
  fetchMandateSearch: () => Promise<void>;
  createContactUs: (data: ContactUsRequestBody) => Promise<void>;
  setReports: Dispatch<SetStateAction<Report | undefined>>;
  fetchTechnologyCategory: () => Promise<void>;
  fetchTechnologySubCategory: (documentId: string) => Promise<void>;
  fetchTechnologyCategoryDetails: (categoryId: string) => Promise<void>;
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
  const [ourTechs, setOurTechs] = useState<TechnologyData[]>();
  const [techCategory, setTechCategory] = useState<TechCategory[]>([]);
  const [techCategoryItem, setTechCategoryItem] = useState<TechCategory>();
  const [techSubCategory, setTechSubCategory] = useState<TechSubCategory[]>([]);
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

  const fetchOurTechs = useCallback(
    async (categoryId: string, page: number, pageSize: number) => {
      try {
        const url= ApiEndpointsEnum.TECHNOLOGIES.replace(
          "{0}", categoryId);
        const response = (
          await axiosInstance.get<BaseResponse<TechnologyData[]>>(
            `${url}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        ).data;
        console.log("response", response);
        setOurTechs(response.data);
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
  const fetchTechnologyCategory = useCallback(
    async () => {
      try {
        const response = (
          await axiosInstance.get<BaseResponse<TechCategory[]>>(
            `${ApiEndpointsEnum.TECHNOLOGY_CATEGORY}`
          )
        ).data;
        setTechCategory(response.data);
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
  const fetchTechnologyCategoryDetails = useCallback(
    async (categoryId: string) => {
      try {
        const response = (
          await axiosInstance.get<BaseResponse<TechCategory>>(
            `${ApiEndpointsEnum.TECHNOLOGY_CATEGORY_DETAILS}/${categoryId}`
          )
        ).data;
        setTechCategoryItem(response.data);
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

  const fetchTechnologySubCategory = useCallback(
    async (documentId: string) => {
      try {
        const url = ApiEndpointsEnum.TECHNOLOGY_SUB_CATEGORY.replace(
          "{0}", documentId);
        const response = (
          await axiosInstance.get<BaseResponse<TechSubCategory[]>>(url)).data;
        setTechSubCategory(response.data);
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
        setReports,
        mandateSearch,
        isLoadingMandateSearch,
        fetchMandateSearch,
        techCategory,
        fetchTechnologyCategory,
        techSubCategory,
        fetchTechnologySubCategory,
        techCategoryItem,
        fetchTechnologyCategoryDetails,
      }}
    >
      {children}
    </GlobalClientContext.Provider>
  );
};

export const useGlobalClient = useGlobalClientContext;
