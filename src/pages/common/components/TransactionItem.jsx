import React from 'react';
import styles from './TransactionsItem.module.css';

const TransactionItem = ({ transaction }) => {
  return (
    <tr className={styles.transactionCard}>
      <td>Date{transaction.date}</td>
      <td> Type{transaction.type}</td>
      <td>Category{transaction.category}</td>
      <td>Comment{transaction.comment}</td>
      <td>${transaction.sum}</td>
      <td>
        <button className={styles.deleteButton}>Delete</button>
      </td>
    </tr>
  );
};

export default TransactionItem;
