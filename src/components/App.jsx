import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { PrivateRoute } from '../routesConfig/PrivateRoute';
import { RestrictedRoute } from '../routesConfig/RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../reduxConfig/auth/selectors';
import { refreshUser } from '../reduxConfig/auth/operations';
import { useMediaQuery } from 'react-responsive';
import Loader from './Loader/Loader';
import { selectIsLoading } from '../reduxConfig/global/selectors';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
      <Loader visible={isLoading} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          >
    
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Loader visible={isLoading} />
    </>
  )
};
