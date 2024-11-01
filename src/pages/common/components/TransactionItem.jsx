import React from 'react';
import styles from './TransactionsItem.module.css';

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <tr className={styles.transactionCard}>
      <td>{transaction.date}</td>
      <td>{transaction.type}</td>
      <td>{transaction.category}</td>
      <td>{transaction.comment}</td>
      <td className={styles.sumCell}>{transaction.sum}</td>
      <td>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(transaction.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionItem;
