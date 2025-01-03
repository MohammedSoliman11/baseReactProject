// import React from "react";
// import "./App.css"; // Import your CSS
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TableTabs } from "./components/dashboard-components/table-tabs";
// import Sidebar from "./components/side-bar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Layout />}>
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
      </BrowserRouter>
    </>
  );
};

export default App;
