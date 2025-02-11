import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RestrictRoute({ children, requiredPermission }) {
  const authState = useSelector((state) => state.auth);
  const { isAuthenticated, permissions } = authState || {}; 

  console.log("Redux State:", authState);
  console.log("Permissions from Redux:", permissions);
  console.log("Checking permission for:", requiredPermission);

  // 🔹 If user is NOT authenticated → Redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/notAuthorized" />;
  }

  // 🔹 If permissions are still loading but user is logged in → Show loading
  if (!permissions || Object.keys(permissions).length === 0) {
    return <div>Loading...</div>; 
  }

  // 🔹 Check if user has required permission
  const isAllowed = permissions?.[requiredPermission]?.length > 0;
  console.log("Access Allowed:", isAllowed);

  return isAllowed ? children : <Navigate to="/notAuthorized" />;
}

export default RestrictRoute;
