import React, { useEffect } from 'react';
import { PrivateRoute } from './routes/PrivateRoute';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { SharedLayout } from './pages/common/components/SharedLayout/SharedLayout';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import LoadingSpinner from './pages/common/components/LoadingSpinner/LoadingSpinner';
// import Sidebar from './pages/common/components/Sidebar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { selectIsLoading } from './redux/globalSelectors';
import { refreshUser } from './redux/auth/operations';
import LoadingSpinner from './pages/common/components/LoadingSpinner/LoadingSpinner';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './pages/DashboardPage';
import CurrencyPage from './pages/CurrencyPage';
// import Login from './pages/Login';
// import Header from './pages/common/components/Header';
// import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoadingSpinner visible={isLoading} />
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
      <LoadingSpinner visible={isLoading} />
      {/* <div className={styles.section}>
        <header className={styles.header}>{<Header />}</header>
        <div className={styles.mainContainer}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
            </Routes>
          </div>
        </div>
      </div> */}
    </>
  );
  // return (
  //   <div className={styles.appContainer}>
  //     <h1>Money Guard</h1>
  //     <header className={styles.header}>{token && <UserMenu />}</header>
  //     <header className={styles.header}>{<Header />}</header>
  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="*" element={<Login />} />
  //       <Route
  //         path="/contacts"
  //         element={token ? <Contacts /> : <Navigate to="/login" replace />}
  //       />
  //       <Route path="/home" element={<MenuCurencyPage />} />
  //     </Routes>
  //   </div>
  // );
};

export default App;
