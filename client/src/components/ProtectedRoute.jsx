import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
  if (isAuth?.token) {
    return <Navigate to={"/profile"} />;
  }
  
  return <>{<Outlet />}</>;
};

export default ProtectedRoute;
