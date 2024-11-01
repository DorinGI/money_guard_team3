import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../../redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';
// import { logout } from '../redux/authSlice';
import sprite from '../../../images/icons/sprite.svg';
import styles from './Header.module.css';
import ModalLogout from './ModalLogout/ModalLogout';

const Header = ({ closeModal = null }) => {
  const userName = useSelector(selectUserName);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleLogout() {
    !closeModal ? setIsModalOpen(true) : closeModal(false);
  }

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
