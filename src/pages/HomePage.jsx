import React from 'react';
import { useSelector } from 'react-redux';
import TransactionsList from './common/components/TransactionsList';
import ButtonAddTransactions from './common/components/ButtonAddTransactions';
import styles from './HomePage.module.css';

const HomePage = () => {
  const transactions = useSelector(state => state.transactions);
  return (
    <div className={styles.homePage}>
      <TransactionsList transactions={transactions} />
      <ButtonAddTransactions />
    </div>
  );
};
export default HomePage;
