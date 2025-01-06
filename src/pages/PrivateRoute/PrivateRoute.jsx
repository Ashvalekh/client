import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component that ensures the user is authenticated before accessing the route
const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('token') !== null; // Check if the user is authenticated

  return isAuthenticated ? element : <Navigate to="/" />; // Redirect to login if not authenticated
};

export default PrivateRoute;