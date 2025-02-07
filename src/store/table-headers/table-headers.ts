import { tableHeadersType } from "../../types";
export const tableHeaders: tableHeadersType = {
  suggestedBudget: [
    { label: "رقم الباب", field: "doorLookUp" },
    { label: "البند", field: "sectionLookUp" },
    { label: "رقم التصنيف الاقتصادي", field: "economicClassificationNumber" },
    { label: "العام الحالي", field: "currentYear" },
    { label: "العام الماضي", field: "lastYear" },
    { label: "الاجراء", field: "actions" },
  ],
  reports: [
    { label: "البند المحجوز منه", field: "proposedBudgetTransferredFromId" },
    { label: "قيمة المبلغ المحجوز", field: "transfersValue" },
    { label: "رقم البند المنقول اليه", field: "proposedBudgetTransferredToId" },
    { label: "قيمة المناقلة", field: "transfersValue" },
    { label: "تاريخ المناقلة", field: "transfersDate" },
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
    { label: "رقم الباب", field: "section.doorLookUp" },
    { label: "رقم البند", field: "section.sectionLookUp" },
    { label: "المبلغ", field: "value" },
    { label: "التاريخ", field: "date" },
    { label: "الاجراء", field: "actions" },
  ],
};
