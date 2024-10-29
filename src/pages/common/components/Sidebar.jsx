import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Balance from './Balance';
import CurrencyChart from './CurencyChart';
import sprite from '../../../images/icons/sprite.svg';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <nav>
        <ul>
          <li className={styles.navHome}>
            <NavLink
              to="/home"
              aria-current="page"
              className={({ isActive }) =>
                isActive ? `${styles.navLinkActive}` : styles.navLinkInaktive
              }
            >
              <svg>
                <use href={`${sprite}#icon-home`} />
              </svg>
              <p>Home</p>
            </NavLink>
          </li>
          <li className={styles.navStatistics}>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? `${styles.navLinkActive}` : styles.navLinkInaktive
              }
            >
              <svg>
                <use href={`${sprite}#icon-statistics`} />
              </svg>
              <p>Statistics</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Balance />
      <CurrencyChart />
    </div>
  );
}

export default Sidebar;
