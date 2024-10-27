import React from 'react';
import styles from './Balance.module.css';

function Balance() {
  return (
    <div className={styles.balanceContainer}>
      <h3>Your Balance</h3>
      <p>€ 5,000</p> {/* Exemplu de valoare */}
    </div>
  );
}

export default Balance;
