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
    { label: "البند المحجوز منه", field: "item_from" },
    { label: "قيمة المبلغ المحجوز", field: "reserved_amount" },
    { label: "رقم المشروع", field: "project_number" },
    { label: "رقم المشروع المنقول اليه", field: "project_number_to" },
    { label: "قيمة المناقلة", field: "transfer_amount" },
    { label: "تاريخ المناقلة", field: "transfer_date" },
    { label: "الاجراء", field: "actions" },
  ],
  annualBudget: [
    { label: "رقم الايضاح", field: "observation_number" },
    { label: "الموافقة مقابل الايرادات", field: "revenue_approval" },
    { label: "تخصيص الميزانية", field: "budget_allocation" },
    { label: "الميزانية المقترحة", field: "proposed_budget" },
    {
      label: "عنوان التصنيف الاقتصادي",
      field: "economic_classification_title",
    },
    {
      label: "التفسير التصنيف الاقتصادي",
      field: "economic_classification_explanation",
    },
    {
      label: "تفاصيل رقم التصنيف الاقتصادي",
      field: "economic_classification_details",
    },
    { label: "الاجراء", field: "actions" },
  ],
  reinforcementBudget: [
    { label: "رقم الباب", field: "id" },
    { label: "رقم البند", field: "item_id" },
    { label: "المبلغ", field: "amount" },
    { label: "التاريخ", field: "date" },
    { label: "الاجراء", field: "actions" },
  ],
};
