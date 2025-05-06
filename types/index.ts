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

//JOURNALS
export type Journal = {
  data: JournalData[];
  meta: Meta;
};

export type JournalData = {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  Link: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Image: any;
  category: Category; 
};

//NEWSLETTERS
export type NewsLetter = {
  data: NewsLetterData[];
  meta: Meta;
};

export type NewsLetterData = {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  Link: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Images: Image[];
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

export enum ApiEndpointsEnum {
  CONTACT_US = "/contacts",
  PROGRAMS = "/events?populate=Image&populate=category&filters[category][slug][$eq]=upcoming",
  OUR_PROJECTS_AND_TECHS = "/technologies?populate=Image",
  COORDINARION_REPORTS = "/reports?populate=Image&populate=category&filters[category][slug][$eq]=coordination-report",
  ALL_REPORTS = "/reports?populate=Image&populate=category",
  MANDATE_SEARCH = "/mandate-slide?populate=Slides",
  ALL_JOURNAL = "/journal?populate=Images",
  ALL_NEWSLETTERS = "/newsletter?populate=Images",
}
