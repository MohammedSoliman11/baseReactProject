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
    { label: "رقم الايضاح", field: "clarificationNumber" },
    { label: "الموافقة مقابل الايرادات", field: "approvalVersusRevenue" },
    { label: "تخصيص الميزانية", field: "budgetAppropriation" },
    { label: "اسم البند", field: "budget.sectionLookUp" },
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
