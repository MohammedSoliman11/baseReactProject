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
  BUDGET_ROUTE,
  HOME_ROUTE,
  DASHBOARD_ROUTE,
  PROJECTS_ROUTE,
  SUMMARIES_ROUTE,
  STUDY_ROUTE,
  SERVICE_REQUESTS_ROUTE,
  JOIN_REQUESTS_ROUTE,
  LOGOUT_ROUTE,
  ADDNEWITEM_BUDGET_ROUTE,
  ADDNEWITEM_REPORTS_ROUTE,
  ADDNEWITEM_ANNUALBUDGET_ROUTE,
  ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE,
  REPORTTABLE_ROUTE,
  SUGGESTEDTABLE_ROUTE,
} = path;

const App = () => {
  return (
    <>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={DASHBOARD_ROUTE} element={<Layout />}>
          <Route
            path={BUDGET_ROUTE}
            element={<TableTabs TableName='suggestedBudget' />}
          >
            <Route
              path={SUGGESTEDTABLE_ROUTE}
              element={<TableTabs TableName='suggestedBudget' />}
            >
              <Route
                path={ADDNEWITEM_BUDGET_ROUTE}
                element={<AddNewItemSuggestedBudgetComponent />}
              />
            </Route>
            <Route
              path={REPORTTABLE_ROUTE}
              element={<TableTabs TableName='report' />}
            >
              <Route
                path={ADDNEWITEM_REPORTS_ROUTE}
                element={<AddNewItemReportComponent />}
              />
            </Route>
            <Route
              path={ADDNEWITEM_ANNUALBUDGET_ROUTE}
              element={<AddNewItemAnnualBudgetComponent />}
            />
            <Route
              path={ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE}
              element={<AddNewItemreinforcementBudgetComponent />}
            />
          </Route>
          <Route path={PROJECTS_ROUTE} element={<NotFound />} />
          <Route path={SUMMARIES_ROUTE} element={<NotFound />} />
          <Route path={STUDY_ROUTE} element={<NotFound />} />
          <Route path={SERVICE_REQUESTS_ROUTE} element={<NotFound />} />
          <Route path={JOIN_REQUESTS_ROUTE} element={<NotFound />} />
          <Route path={LOGOUT_ROUTE} element={<NotFound />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
