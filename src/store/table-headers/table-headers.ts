import { tableHeadersType } from "../../types";
export const tableHeaders: tableHeadersType = {
  suggestedBudget: [
    { label: "رقم الباب", field: "id" },
    { label: "البند", field: "item" },
    { label: "رقم التصنيف الاقتصادي", field: "economic_classification_number" },
    { label: "العام الحالي", field: "current_year" },
    { label: "العام الماضي", field: "past_year" },
    { label: "الاجراء", field: "actions" },
  ],
  reports: [
    { label: "رقم التصنيف الاقتصادي", field: "economic_classification_number" },
    { label: "البند المنقول منه", field: "item_from" },
    { label: "البند المنقول له", field: "item_to" },
    { label: "المبلغ", field: "amount" },
    { label: "المحجوز منه", field: "reserved_from" },
    { label: "العام الحالي", field: "current_year" },
    { label: "العام الماضي", field: "past_year" },
    { label: "الاجراء", field: "actions" },
  ],
  annualBudget: [
    { label: "رقم الباب", field: "id" },
    { label: "رقم العنصر", field: "id" },
    { label: "رقم الايضاح", field: "id" },
    { label: "الموافقة مقابل الايرادات", field: "id" },
    { label: "تخصيص الميزانية", field: "id" },
    { label: "رقم التصنيف الاقتصادي", field: "economic_classification_number" },
    { label: "الميزانية المقترحة", field: "id" },
    { label: "التكاليف المعتمدة", field: "id" },
    { label: "الاجراء", field: "actions" },
  ],
  reinforcementBudget: [
    { label: "رقم الباب", field: "id" },
    { label: "رقم البند", field: "id" },
    { label: "المبلغ", field: "id" },
    { label: "التاريخ", field: "id" },
    { label: "الاجراء", field: "actions" },
  ],
};
