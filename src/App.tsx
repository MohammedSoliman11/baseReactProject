import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import { TableTabs } from "./components/dashboard-components/budget/table-tabs";
import budgetComponents from "./components/dashboard-components/budget";
import NotFound from "./pages/Page-Not-Found";
import Home from "./pages/Home";
import path from "./Routes/appRoutes";

const {
  AddNewItemSuggestedBudgetComponent,
  AddNewItemReportComponent,
  AddNewItemAnnualBudgetComponent,
  AddNewItemreinforcementBudgetComponent,
} = budgetComponents;

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
  ANNUALTABLE_ROUTE,
  REINFORCEMENTTABLE_ROUTE,
} = path;

const App = () => {
  const location = useLocation();
  const locationPart =
    location.pathname.split("/")[2] === undefined
      ? "dashboard"
      : location.pathname.split("/")[2];
  console.log(locationPart);
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route element={<Layout activeTab={locationPart} />}>
        {/* Dashboard Routing */}
        <Route path={DASHBOARD_ROUTE} element={<NotFound />} />

        {/* Budget Routing */}
        <Route path={BUDGET_ROUTE}>
          {/* Suggested Budget Table Routing */}
          <Route
            index
            path={BUDGET_ROUTE}
            element={<TableTabs TableName='suggestedBudget' />}
          />
          <Route
            index
            path={SUGGESTEDTABLE_ROUTE}
            element={<TableTabs TableName='suggestedBudget' />}
          />
          <Route
            path={ADDNEWITEM_BUDGET_ROUTE}
            element={<AddNewItemSuggestedBudgetComponent />}
          />

          {/* Reports Table Routing */}
          <Route
            path={REPORTTABLE_ROUTE}
            element={<TableTabs TableName='reports' />}
          />
          <Route
            path={ADDNEWITEM_REPORTS_ROUTE}
            element={<AddNewItemReportComponent />}
          />

          {/* Annual Budget Table Routing */}
          <Route
            path={ANNUALTABLE_ROUTE}
            element={<TableTabs TableName='annualBudget' />}
          />
          <Route
            path={ADDNEWITEM_ANNUALBUDGET_ROUTE}
            element={<AddNewItemAnnualBudgetComponent />}
          />

          {/* Reinforcement Budget Table Routing */}
          <Route
            path={REINFORCEMENTTABLE_ROUTE}
            element={<TableTabs TableName='reinforcementBudget' />}
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
  );
};

export default App;
