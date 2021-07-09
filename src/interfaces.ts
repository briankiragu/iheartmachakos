export interface IBusiness {
  directoryIdx: number;
  category: string;
  title: string;
  city: string;
  owner: string;
  website: null | string;
  status?: string;
}

export interface ICategory {
  param: string;
  title: string;
  status: string;
}

export interface IPaginatedBusinessResponse {
  rowcount: number;
  recordsperpage: number;
  data: IBusiness[];
}

export interface IPaginatedCategoryResponse {
  rowcount: number;
  recordsperpage: number;
  data: ICategory[];
}

export interface IBusinessForm {
  title: string;
  category: string;
  city: string;
  website: string;
  notes: string;
}