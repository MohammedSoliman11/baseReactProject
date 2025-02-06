import { SuggestedBudgetData } from "../api/dashboard/budget/suggested-budget/types";

export interface ITableActions {
  tableName: string;
  index: number;
  currentIndex: number;
  data: SuggestedBudgetData;
}
