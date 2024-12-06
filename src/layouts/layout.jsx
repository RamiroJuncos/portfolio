import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col text-green-500 font-mono">
      <div className="h-16 w-full border-b border-transparent shadow-lg shadow-green-500 sticky top-0 z-50">
        <Navbar/>
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
