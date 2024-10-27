import React from 'react';
import TransactionItem from './TransactionItem';
import styles from './TransactionList.module.css';

const TransactionsList = ({ transactions = [] }) => {
  return (
    <table className={styles.transactionsContainer}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <tr>
            <td colSpan="6" className={styles.noTransactions}>
              No transactions available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TransactionsList;
