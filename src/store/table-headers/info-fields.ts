import { IInfoFieldsType } from "../../types";
export const infoFields: IInfoFieldsType = {
  suggestedBudget: [
    { label: "رقم الباب", field: "id" },
    { label: "البند", field: "item" },
    { label: "رقم التصنيف الاقتصادي", field: "economic_classification_number" },
    { label: "ميزانية السنة القادمة", field: "next_year_budget" },
    { label: "المعتمد السابق", field: "previous_approval" },
    { label: "الاجمالي المعتمد السابق", field: "total_previous_approval" },
    { label: "المنصرف السابق", field: "previous_expenses" },
    { label: "الوفر", field: "savings" },

    { label: "العام الحالي", field: "current_year" },
    { label: "العام الماضي", field: "past_year" },
    { label: "الملاحظات", field: "notes" },
  ],
  reports: [
    { label: "البند المحجوز منه", field: "item_from" },
    { label: "قيمة المبلغ المحجوز", field: "reserved_amount" },
    { label: "رقم المشروع", field: "project_number" },
    { label: "رقم المشروع المنقول اليه", field: "project_number_to" },
    { label: "قيمة المناقلة", field: "transfer_amount" },
    { label: "تاريخ المناقلة", field: "transfer_date" },
    { label: "اجمالي الميزانيه للبند المنقول منه", field: "total_budget" },
    { label: "نسبه للبند المنقول منه", field: "percentage" },
    { label: "اجمالي الميزانيه للبند المنقول اليه", field: "total_budget_to" },
    { label: "نسبه للبند المنقول اليه", field: "percentage_to" },

    { label: "العام", field: "year" },
    { label: "الملاحظات", field: "notes" },
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
