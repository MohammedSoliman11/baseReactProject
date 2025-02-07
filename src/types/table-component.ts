import { SuggestedBudgetData } from "../api/dashboard/budget/suggested-budget/types";

export interface Column {
  label: string;
  field: string;
}

export interface RowData {
  [key: string]: string | number; // Generic key-value for each row
}
export interface IData {
  [key: string]: RowData[];
}

export interface TableWithPaginationProps {
  data: SuggestedBudgetData[];
  columns: Column[];
  tableName: string;
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}
