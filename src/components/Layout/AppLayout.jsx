import React from "react";
import HeaderNew from "../UI/HeaderNew"; // Import your header component
import Footer from "../UI/Footer"; // Import your header component
import { Outlet } from "react-router-dom";

const AppLayout = ({ children }) => {
  return (
    <div>
      <HeaderNew />
    <Outlet/>
    <Footer/>
    </div>
  );
};

export default AppLayout; // Ensure this is the default export