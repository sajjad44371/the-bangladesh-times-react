import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <div className="bg-base-200 min-h-screen">
        <header className="py-8 w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="w-11/12 mx-auto py-[80px]">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
