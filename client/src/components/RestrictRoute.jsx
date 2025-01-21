import React from 'react';
import { Navigate } from 'react-router-dom';

function RestrictRoute({ children, requiredPermission }) {

  const allowed = JSON.parse(localStorage.getItem('permissions')) || {};
  const isAllowed = allowed[requiredPermission] && allowed[requiredPermission].length > 0;
  return isAllowed ? children : <Navigate to="/notAuthorized" />;
}

export default RestrictRoute;
