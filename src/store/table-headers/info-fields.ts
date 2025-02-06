import { IInfoFieldsType } from "../../types";
export const infoFields: IInfoFieldsType = {
  suggestedBudget: [
    { label: "رقم الباب", field: "doorLookUp" },
    { label: "البند", field: "sectionLookUp" },
    { label: "رقم التصنيف الاقتصادي", field: "economicClassificationNumber" },
    { label: "ميزانية السنة القادمة", field: "nextYearBudget" },
    { label: "المعتمد السابق", field: "previousApproved" },
    { label: "الاجمالي المعتمد السابق", field: "totalPreviousApproved" },
    { label: "المنصرف السابق", field: "previousOutgoing" },
    { label: "الوفر", field: "previousAvailable" },

    { label: "العام الحالي", field: "currentYear" },
    { label: "العام الماضي", field: "lastYear" },
    { label: "الملاحظات", field: "notes" },
  ],
  reports: [
    { label: "البند المحجوز منه", field: "proposedBudgetTransferredFromId" },
    { label: "قيمة المبلغ المحجوز", field: "transfersValue" },
    { label: "رقم المشروع", field: "project_number" },
    { label: "رقم المشروع المنقول اليه", field: "proposedBudgetTransferredToId" },
    { label: "قيمة المناقلة", field: "transfersValue" },
    { label: "تاريخ المناقلة", field: "transfersDate" },



    // { label: "اجمالي الميزانيه للبند المنقول منه", field: "total_budget" },
    // { label: "نسبه للبند المنقول منه", field: "percentage" },
    // { label: "اجمالي الميزانيه للبند المنقول اليه", field: "total_budget_to" },
    // { label: "نسبه للبند المنقول اليه", field: "percentage_to" },

    // { label: "العام", field: "year" },
    // { label: "الملاحظات", field: "notes" },
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
  ],
  reinforcementBudget: [
    { label: "رقم الباب", field: "id" },
    { label: "رقم البند", field: "item_id" },
    { label: "المبلغ", field: "amount" },
    { label: "التاريخ", field: "date" },
  ],
};
