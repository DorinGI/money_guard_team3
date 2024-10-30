import React from 'react';
import { useDispatch } from 'react-redux';
import { openAddModal } from '../../../../redux/Modals/slice';
import styles from './AddButton.module.css';

const AddButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openAddModal());
  };

  return (
    <button className={styles.addButton} onClick={handleClick}>
      +
    </button>
  );
};

export default AddButton;
