import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import UserMenu from './components/UserMenu';
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
    <div className={styles.appContainer}>
      <h1>Money Guard</h1>
      {/* <header className={styles.header}>{token && <UserMenu />}</header>
       <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="*" element={<Login />} /> */}{' '}
      {/* <Route
  //         path="/contacts"
  //         element={token ? <Contacts /> : <Navigate to="/login" replace />}
  //       /> */}
      {/* //     </Routes> */}
    </div>
  );
};

export default App;
