// import React from "react";
// import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/side-bar";
import TopBar from "../components/search-bar";

export default function Layout() {
  return (
    <div className='layout'>
      {/* <Navbar /> */}
      <div className='container-fluid m-0 p-0'>
        <div className='row'>
          {/* <div class='col-md-4'>.col-md-4</div>
          <div class='col-md-4 offset-md-0'>.col-md-4 .offset-md-4</div> */}
          <div className='col-md-2 p-0 m-0 position-fixed'>
            <Sidebar />
          </div>
          <div className='col-md-2'></div>
          <div className='col-md-10 p-0 m-0'>
            <div className='row mx-0'>
              <TopBar />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
