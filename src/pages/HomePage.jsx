import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAllTransactions,
  //   getTransactionsCategories,
} from '../redux/transactions/operations';
import { openAddModal } from '../redux/Modals/slice';
import TransactionList from './common/components/TransactionsList';
import AddButton from './common/components/AddButton/AddButton';
import ModalAddTransaction from './common/components/ModalAddTransaction/ModalAddTransaction';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactions());
    // dispatch(getTransactionsCategories());
  }, [dispatch]);

  const openModal = () => {
    dispatch(openAddModal());
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <TransactionList />
      <AddButton onClick={openModal} />
      <ModalAddTransaction />
    </>
  );
}

export default Home;
