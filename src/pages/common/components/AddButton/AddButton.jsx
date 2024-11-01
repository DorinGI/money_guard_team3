import React from 'react';
import styles from './AddButton.module.css';

const AddButton = ({ onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      +
    </button>
  );
};

export default AddButton;
