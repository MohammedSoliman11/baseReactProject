export interface GetAllReinforcementBudgetQueryParams {
  name?: string;
  sectionId?: number;
  pageNumber?: number;
  pageSize?: number;
}

export interface ReinforcementBudgetDataRequest {
  id?: number;
  sectionId: number;
  value: number;
  date: string;
}