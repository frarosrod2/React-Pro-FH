import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRouter } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';
import { Navigation } from './Navigation';

export const AppRouter = () => {
  return (
    <>
      <Navigation />
    </>
  );
};
