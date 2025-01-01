export interface Column {
  label: string;
  field: string;
}

export interface RowData {
  [key: string]: string | number; // Generic key-value for each row
}

export interface TableWithPaginationProps {
  data: RowData[];
  columns: Column[];
}
