import React, { useState } from 'react';
import ModalAddTransaction from './ModalAddTransaction';
import styles from './ButtonAddTransactions.module.css';

const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.addButton} onClick={handleOpenModal}>
        +
      </button>
      <ModalAddTransaction
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
};

export default ButtonAddTransactions;
