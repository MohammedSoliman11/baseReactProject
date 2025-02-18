export interface IFilterPopup {
  tableName: string;
  FilterParams: IFilterParams;
  setFilterParams: React.Dispatch<React.SetStateAction<{ doorId: number; sectionId: number }>>;
}
export interface IFilterParams {
    doorId: number,
    sectionId: number,
}
export interface IFilterRowContentInside {
  label: string;
  inputType: string;
  name: string;
}
export interface IFilterRowsContent {
  [key: string]: IFilterRowContentInside[][];
}
