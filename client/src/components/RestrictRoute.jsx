import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function RestrictRoute({ children, requiredPermission }) {
  const authState = useSelector((state) => state.auth) || {};
  const allowed = authState.permissions?.permissions || {}; // Fix here

  console.log("Permissions from Redux:", allowed);
  console.log("Checking permission for:", requiredPermission);

  const isAllowed = allowed[requiredPermission] && allowed[requiredPermission].length > 0;
  console.log("Access Allowed:", isAllowed);

  return isAllowed ? children : <Navigate to="/notAuthorized" />;
}

export default RestrictRoute;
