import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { lazy } from "react";
// import Register from './pages/Register';
// import Login from './pages/Login';
// import UserMenu from './components/UserMenu';


const StatisticsPage = lazy(() =>
  import("../src/pages/StatisticsPage/RestrictedStatisticsPage")
);

const App = () => {
  const isOnMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  return (
  //   <div className={styles.appContainer}>
  //     <h1>Money Guard</h1>
  //     {/* <header className={styles.header}>{token && <UserMenu />}</header>
  //      <Routes>
  //        <Route path="/login" element={<Login />} />
  //        <Route path="/register" element={<Register />} />
  //        <Route path="*" element={<Login />} /> */}{' '}
  //     {/* <Route
  // //         path="/contacts"
  // //         element={token ? <Contacts /> : <Navigate to="/login" replace />}
  // //       /> */}
  //     {/* //     </Routes> */}
  //   </div>
    <>
      <Routes>
          <Route path="statistics" element={<StatisticsPage />} />
      </Routes>

      
    </>
  );
};

export default App;
