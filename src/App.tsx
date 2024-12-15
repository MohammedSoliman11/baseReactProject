// src/App.jsx
// import React from "react";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";


const App = () => {
  const routes = createHashRouter([{
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  }
]);

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  );
};

export default App;
