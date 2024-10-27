import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" aria-current="page">
              <svg>
                <use href={`${sprite}#icon-home`} />
              </svg>
              <p>Home</p>
            </Link>
          </li>
          <li className={styles.navStatistics}>
            <Link to="/statistics">
              <svg>
                <use href={`${sprite}#icon-statistics`} />
              </svg>
              <p>Statistics</p>
            </Link>
          </li>
        </ul>
      </nav>
      <Balance />
      <CurrencyChart />
    </div>
  );
}

export default Sidebar;
