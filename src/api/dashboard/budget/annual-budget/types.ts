export interface GetAllAnnualBudgetQueryParams {
  name?: string;
  sectionId?: number;
  pageNumber?: number;
  pageSize?: number;
}

export interface AnnualBudgetDataRequest {
  id?: number;
  budgetId: number;
  clarificationNumber: string;
  approvalVersusRevenue: number;
  budgetAppropriation: number;
  economicClassificationDetails: number;
  economicClassificationExplanation: number;
  economicClassificationName: number;
}