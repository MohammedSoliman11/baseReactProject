export interface IFilterPopup {
  tableName: string;
}
export interface IFilterRowContentInside {
  label: string;
  inputType: string;
}
export interface IFilterRowsContent {
  [key: string]: IFilterRowContentInside[][];
}
