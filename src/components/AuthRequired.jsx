import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthRequired = () => {
  const authenticated = true;

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AuthRequired;
