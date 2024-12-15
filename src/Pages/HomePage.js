import React from 'react'
import Sidebar from "../Components/Dashboard/Sidebar.js";
import Topbar from "../Components/Dashboard/Topbar.js";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
      <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div className="container-fluid">
                  <Outlet />
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage