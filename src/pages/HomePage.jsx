import { useEffect, useState } from 'react';

import { ButtonAddTransactions } from './common/components/AddButton/AddButton';

import TransactionsList from './common/components/TransactionsList';
import TransactionsTable from './common/components/TransactionsTable/TransactionsTable';
import { useMediaQuery } from 'react-responsive';
import styles from './HomePage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectAllTransactions } from '../redux/transactions/selectors';
import { fetchAllTransactions } from '../redux/transactions/operations';
import {
  selectIsAddModalOpen,
  openAddModal,
  closeAddModal,
} from '../redux/Modals/slice';

import ModalDeleteTransaction from './common/components/ModalDeleteTransaction/ModalDeleteTransaction';
import ModalAddTransaction from './common/components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from './common/components/ModalEditTransaction/ModalEditTransaction';
import LoadingSpinner from '../pages/common/components/LoadingSpinner/LoadingSpinner';
import Balance from './common/components/Balance';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  const data = useSelector(selectAllTransactions);

  const isAddModalOpen = useSelector(selectIsAddModalOpen);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);

  const screenCondition = useMediaQuery({ query: '(min-width: 768px)' });

  const [forcedLoading, setForcedLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setForcedLoading(false), 1500);
  }, [forcedLoading]);

  if (forcedLoading) {
    return <LoadingSpinner />;
  }

  const animation = 'animate__animated  animate__fadeIn animate__slow';

  return (
    <>
      <div className={`${styles.HomePage} ${animation}`}>
        {!screenCondition && <Balance />}

        {screenCondition ? (
          <TransactionsTable
            data={data}
            openDeleteModal={() => setIsDeleteModalOpen(true)}
            openEditModal={() => setisEditModalOpen(true)}
          />
        ) : (
          <TransactionsList
            data={data}
            openDeleteModal={() => setIsDeleteModalOpen(true)}
            openEditModal={() => setisEditModalOpen(true)}
          />
        )}

        <ButtonAddTransactions onClick={() => dispatch(openAddModal())} />
      </div>

      <>
        {isAddModalOpen && (
          <ModalAddTransaction closeModal={() => dispatch(closeAddModal())} />
        )}

        {isDeleteModalOpen && (
          <ModalDeleteTransaction
            closeModal={() => setIsDeleteModalOpen(false)}
          />
        )}

        {isEditModalOpen && (
          <ModalEditTransaction closeModal={() => setisEditModalOpen(false)} />
        )}
      </>
    </>
  );
};

export default HomePage;
