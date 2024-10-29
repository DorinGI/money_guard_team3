import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/authSlice';
import sprite from '../../../images/icons/sprite.svg';
import styles from './Header.module.css';

const Header = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    //   dispatch(logout());
  };

  return (
    <div className={styles.headerContainerOutside}>
      <div className={styles.headerContainer}>
        <Link to="/home">
          <svg width="17" height="17">
            <use href={`${sprite}#icon-logo`} />
          </svg>
          <p>Money Guard</p>
        </Link>
        <div className={styles.userContainer}>
          <span className={styles.userInfo}>Username</span>
          {/* <span className={styles.userInfo}>{user?.name}</span>
      <span className={styles.userInfo}>{user?.email}</span> */}
          <button className={styles.logoutButton} onClick={handleLogout}>
            <svg width="17" height="17">
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
            <p>Exit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
