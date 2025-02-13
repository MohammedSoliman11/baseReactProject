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
    { label: "البند المحجوز منه", field: "holdMoneyProposedBudget" },
    { label: "قيمة المبلغ المحجوز", field: "holdMoneyValue" },
    { label: "اسم البند المنقول اليه", field: "proposedBudgetTransferredTo" },
    { label: "قيمة المناقلة", field: "transfersValue" },
    { label: "تاريخ المناقلة", field: "transfersDate" },


    { label: "اجمالي الميزانيه للبند المنقول منه", field: "totalProposedBudgetTransferredFrom" },
    { label: "نسبه للبند المنقول منه", field: "percentageProposedBudgetTransferredFrom" },
    { label: "اجمالي الميزانيه للبند المنقول اليه", field: "totalProposedBudgetTransferredTo" },
    { label: "نسبه للبند المنقول اليه", field: "percentageProposedBudgetTransferredTo" },
    { label: "اجمالي المبلغ المحجوز منه", field: "totalProposedBudgetHoldMoney" },
    { label: "نسبة المبلغ المحجوز منه", field: "percentageProposedBudgetHoldMoney" },
    { label: "العام", field: "year" },
    { label: "الملاحظات", field: "notes" },
  ],
  annualBudget: [
    { label: "رقم الايضاح", field: "clarificationNumber" },
    { label: "الموافقة مقابل الايرادات", field: "approvalVersusRevenue" },
    { label: "تخصيص الميزانية", field: "budgetAppropriation" },
    { label: "اسم البند", field: "budget" },
    {
      label: "مسمي التصنيف الاقتصادي",
      field: "economicClassificationName",
    },
    {
      label: "تفسير مسمي التصنيف الاقتصادي",
      field: "economicClassificationExplanation",
    },
    {
      label: "تفاصيل مسمي التصنيف الاقتصادي",
      field: "economicClassificationDetails",
    },
  ],
};
