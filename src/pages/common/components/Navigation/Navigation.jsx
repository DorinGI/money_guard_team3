import { NavLink } from 'react-router-dom';
import sprite from '../../../../images/icons/sprite.svg';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.sidebarContainer}>
      <nav>
        <ul>
          <li className={styles.navHome}>
            <NavLink
              to="/dashboard"
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
              to="/dashboard/statistics"
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
    </div>
  );
}

export default Navigation;
