import React, { useEffect } from 'react';
import { PrivateRoute } from './routes/PrivateRoute';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { SharedLayout } from './pages/common/components/SharedLayout/SharedLayout';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './pages/DashboardPage';
import CurrencyPage from './pages/CurrencyPage';
import Notify from './pages/common/Notify/Notify';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
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
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="statistics" element={<StatisticsPage />} />
              <Route
                path="currency"
                element={
                  isTabletOrDesktop ? <Navigate to="/" /> : <CurrencyPage />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      <Notify />
    </>
  );
};

export default App;

