import React from 'react';
import TransactionItem from './TransactionItem';
import styles from './TransactionList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../../../redux/transactions/operations';
import { toast } from 'react-toastify';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.items); // Obtine lista de tranzactii din Redux

  const handleDelete = id => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this transaction?'
    );
    if (confirmDelete) {
      dispatch(deleteTransaction(id)); // Apeleaza action-ul de stergere
    } else {
      toast.info('Transaction deletion canceled.');
    }
  };

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
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={handleDelete}
            />
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
