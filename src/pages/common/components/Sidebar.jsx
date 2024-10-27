import React from 'react';
import { Link } from 'react-router-dom';
import Balance from './Balance';
import CurrencyChart from './CurencyChart';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div style={{ width: '250px', background: '#f4f4f4', padding: '20px' }}>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
      <Balance />
      <CurrencyChart />
    </div>
  );
}

export default Sidebar;
