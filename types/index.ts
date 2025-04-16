// CONTACT US

export type ContactUsRequestBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactUsResponseBody = {
  data: ContactUsData;
  meta: Meta;
};

export type ContactUsData = {
  id: number;
  documentId: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

// MANDATE SEARCH
export type MandateSearch = {
  data: MandateSearchData;
  meta: Meta;
};

export type MandateSearchData = {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Slides: Slide[];
};

export type Slide = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: MandateSearchFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type MandateSearchFormats = {
  large: FormatSizes;
  small: FormatSizes;
  medium: FormatSizes;
  thumbnail: FormatSizes;
};

export type FormatSizes = {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export enum EXT {
  Jpg = ".jpg",
}

// REPORTS

export type Report = {
  data: ReportData[];
  meta: Meta;
};

export type ReportData = {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  Link: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Image: Image;
  category: Category;
};

// OUR TECHNOLOGIES AND OUR PROJECTS
export type OurTechnologiesAndProjects = {
  data: OurTechsAndProjectsData[];
  meta: Meta;
};

export interface OurTechsAndProjectsData {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Image: Image;
}

// OUR PROGRAMS
export type OurPrograms = {
  data: OurProgramsData[];
  meta: Meta;
};

export type OurProgramsData = {
  id: number;
  documentId: string;
  Title: string;
  Description: Description[];
  Location: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  StartDate: Date;
  DateRange: boolean;
  EndDate: null;
  Image: Image;
  category: Category;
};

export type Description = {
  type: string;
  children: Child[];
};

export type Child = {
  text: string;
  type: string;
};

export type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type Formats = {
  thumbnail: Thumbnail;
};

export type Thumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type Category = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type Meta = {
  pagination?: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
export interface TechCategory  {
  id: number
  documentId: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  icon: Image
}
export interface TechSubCategory  {
  id: number
  documentId: string
  name: string
  color: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  technologies: CountData
  technology_category?: TechCategory
}

export interface TechnologyData{
  id: number
  documentId: string
  Title: string
  Description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  yearReleased: string
  adoptionRate: string
  institutionResponsible: string
  Image: Image,
  technology_sub_category: TechSubCategory
}

export interface DownloadData{
  id: number
  documentId: string
  title: string
  excerpt: string
  datePublished: string
  link: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  download_category: TechCategory
}
export interface ProjectData {
  id: number
  documentId: string
  title: string
  excerpt: string
  details: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
}
export interface CountData{
  count: number
}
export interface BaseResponse<T> {
  data: T
}
export interface PaginationMeta{
  pagination: Pagination
}

export interface BaseResponseWithPagination<T>{
  data: T[],
  meta: PaginationMeta
}

export enum ApiEndpointsEnum {
  CONTACT_US = "/contacts",
  PROGRAMS = "/events?populate=Image&populate=category&filters[category][slug][$eq]=upcoming",
  TECHNOLOGIES = "/technologies?populate[Image][fields][1]=url&populate[1]=technology_sub_category&populate[technology_sub_category][populate]=technology_category&filters[technology_sub_category][documentId][$eq]={0}",
  OUR_PROJECTS_AND_TECHS = "/technologies?populate=Image",
  TECHNOLOGY_CATEGORY = "/technology-categories?populate=icon",
  DOWNLOAD_CATEGORY = "/download-categories?populate=icon",
  DOWNLOADS = "/downloads?populate=download_category&filters[download_category][documentId][$eq]={0}",
  TECHNOLOGY_CATEGORY_DETAILS = "technology-categories",
  TECHNOLOGY_SUB_CATEGORY = "/technology-sub-categories?filters[technology_category][documentId][$eq]={0}&populate[technologies][count]=true",
  COORDINARION_REPORTS = "/reports?populate=Image&populate=category&filters[category][slug][$eq]=coordination-report",
  ALL_REPORTS = "/reports?populate=Image&populate=category",
  MANDATE_SEARCH = "/mandate-slide?populate=Slides",
  PROJECTS = "/projects?populate=image&fields[0]=title&fields[1]=excerpt&fields[2]=documentId",
  PROJECT_DETAILS = "/projects/{0}?populate=image"
}
