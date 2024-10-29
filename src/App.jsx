import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './pages/common/components/Sidebar';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
// import { useSelector, useDispatch } from 'react-redux';
// import Register from './pages/Register';
// import Login from './pages/Login';
import Header from './pages/common/components/Header';
import styles from './App.module.css';

const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(state => state.auth.token);
  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchContacts());
  //   }
  // }, [dispatch, token]);
  return (
    <>
      <header className={styles.header}>{<Header />}</header>
      <div className={styles.mainContainer}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Routes>
        </div>
      </div>
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
