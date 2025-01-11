import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";

import { TableTabs } from "./components/dashboard-components/budget/table-tabs";

import budgetComponents from "./components/dashboard-components/budget";
const {
  AddNewItemSuggestedBudgetComponent,
  AddNewItemReportComponent,
  AddNewItemAnnualBudgetComponent,
  AddNewItemreinforcementBudgetComponent,
} = budgetComponents;

import NotFound from "./pages/Page-Not-Found";
import Home from "./pages/Home";

import path from "./Routes/appRoutes";
const {
  HOME_ROUTE,
  ADDNEWITEM_BUDGET_ROUTE,
  DASHBOARD_ROUTE,
  ADDNEWITEM_REPORTS_ROUTE,
  ADDNEWITEM_ANNUALBUDGET_ROUTE,
  ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE,
} = path;

const App = () => {
  return (
    <>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={DASHBOARD_ROUTE} element={<Layout />}>
          <Route index element={<TableTabs />} />
          <Route
            path={ADDNEWITEM_BUDGET_ROUTE}
            element={<AddNewItemSuggestedBudgetComponent />}
          />
          <Route
            path={ADDNEWITEM_REPORTS_ROUTE}
            element={<AddNewItemReportComponent />}
          />
          <Route
            path={ADDNEWITEM_ANNUALBUDGET_ROUTE}
            element={<AddNewItemAnnualBudgetComponent />}
          />
          <Route
            path={ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE}
            element={<AddNewItemreinforcementBudgetComponent />}
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
