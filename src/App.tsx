import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { TableTabs } from "./components/dashboard-components/budget/table-tabs";

import routes from "./Routes/appRoutes";
import AddNewItemSuggestedBudgetComponent from "./components/dashboard-components/budget/add-items-suggestedBudget";
import AddNewItemReportComponent from "./components/dashboard-components/budget/add-items-reports";
import NotFound from "./pages/Page-Not-Found";

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
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
