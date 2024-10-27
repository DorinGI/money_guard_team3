import React from 'react';
import PropTypes from 'prop-types';

const ModalAddTransaction = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <h1>Add transaction</h1>
      <button onClick={onRequestClose}>Închide</button>
    </div>
  );
};
ModalAddTransaction.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
export default ModalAddTransaction;
