import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { TableTabs } from "./components/dashboard-components/budget/table-tabs";

import routes from "./Routes/appRoutes";

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
        </Route>
      </Routes>
    </>
  );
};

export default App;
