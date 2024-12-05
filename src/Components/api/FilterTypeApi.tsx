export type GitHubAPIResponse = {
  status: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isIdle: boolean;
  data: GitHubAPIResponseData;
  dataUpdatedAt: number;
  error: null;
  errorUpdatedAt: number;
  failureCount: number;
  errorUpdateCount: number;
  isFetched: boolean;
  isFetchedAfterMount: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  isLoadingError: boolean;
  isPlaceholderData: boolean;
  isPreviousData: boolean;
  isRefetchError: boolean;
  isStale: boolean;
};

export type GitHubAPIResponseData = {
  success: boolean;
  data: PageData;
  message: null;
};

export type PageData = {
  content: PersonalData[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export type Pageable = {
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type PersonalData = {
  id: number;
  name: string;
  lastname: string;
  profile: Profile;
};

export type Profile = {
  id: number;
  name: Name;
};

export enum Name {
  AbogadoProcurador = "ABOGADO/PROCURADOR",
  Entidad = "ENTIDAD",
  PeritoOtro = "PERITO/OTRO",
}

export type Sort = {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
};

export type RequiredResponse = {
  content: Array<{
    id: number;
    name: string;
    lastname: string;
    profile: {
      id: number;
      name: string;
    };
  }>;
  pagesInfo: {
    pageNumber: number;
    totalPages: number;
    numberOfElements: number;
    pageSize: number;
  };
};

export const FilterTypeApi = (data: PageData): RequiredResponse => {
  return {
    content: data.content.map((personnalInfo) => ({
      id: personnalInfo.id,
      name: personnalInfo.name,
      lastname: personnalInfo.lastname,
      profile: {
        id: personnalInfo.profile.id,
        name: personnalInfo.profile.name,
      },
    })),
    pagesInfo: {
      pageNumber: data.pageable.pageNumber,
      pageSize: data.pageable.pageSize,
      totalPages: data.totalPages,
      numberOfElements: data.numberOfElements,
    },
  };
};
