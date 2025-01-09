import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { TableTabs } from "./components/dashboard-components/budget/table-tabs";

import routes from "./Routes/appRoutes";
import AddNewItemSuggestedBudgetComponent from "./components/dashboard-components/budget/add-items-suggestedBudget";
import AddNewItemReportComponent from "./components/dashboard-components/budget/add-items-reports";
import NotFound from "./pages/Page-Not-Found";
import AddNewItemAnnualBudgetComponent from "./components/dashboard-components/budget/add-items-annualBudget";
import AddNewItemreinforcementBudgetComponent from "./components/dashboard-components/budget/add-items-reinforcementBudget";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME_ROUTE} element={<Home />} />
        <Route path={routes.DASHBOARD_ROUTE} element={<Layout />}>
          <Route
            index
            element={
              <div className='mt-4'>
                <TableTabs />
              </div>
            }
          />
          <Route
            path={routes.ADDNEWITEM_BUDGET_ROUTE}
            element={<AddNewItemSuggestedBudgetComponent />}
          />
          <Route
            path={routes.ADDNEWITEM_REPORTS_ROUTE}
            element={<AddNewItemReportComponent />}
          />
          <Route
            path={routes.ADDNEWITEM_ANNUALBUDGET_ROUTE}
            element={<AddNewItemAnnualBudgetComponent />}
          />
          <Route
            path={routes.ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE}
            element={<AddNewItemreinforcementBudgetComponent />}
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
