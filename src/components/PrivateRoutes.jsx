import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/user';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useUserStore();

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
