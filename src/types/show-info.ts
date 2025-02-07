import { SuggestedBudgetData } from "../api/dashboard/budget/suggested-budget/types";

export interface IShowInfo {
  currentIndex: number;
  tableName: string;
  data: SuggestedBudgetData;
}
