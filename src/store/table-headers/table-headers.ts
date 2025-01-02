import { tableHeadersType } from "../../types";
export const tableHeaders: tableHeadersType = {
  suggested: [
    { label: "رقم الباب", field: "id" },
    { label: "البند", field: "item" },
    { label: "رقم التصنيف الاقتصادي", field: "economic_classification_number" },
    { label: "العام الحالي", field: "current_year" },
    { label: "العام الماضي", field: "past_year" },
    { label: "الاجراء", field: "actions" },
  ],
  reports: [
    { label: "رقم الباب", field: "id" },
    { label: "البند", field: "item" },
    { label: "رقم التصنيف الاقتصادي", field: "economic_classification_number" },
    { label: "البند المنقول منه", field: "item_from" },
    { label: "المناقلات منه", field: "from" },
    { label: "البند المنقول له", field: "item_to" },
    { label: "العام الحالي", field: "current_year" },
    { label: "العام الماضي", field: "past_year" },
    { label: "الاجراء", field: "actions" },
  ],
};
